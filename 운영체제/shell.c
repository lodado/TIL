#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<string.h>
#include<fcntl.h>

#define MAX_LENGTH 100
#define ARR_LENGTH 10
#define historypath "/home/history" // for history
//I tried to use historypath as in ~/ like ~/.bash_history
//but it didnt work well because of permission?

int history_command(char** input);


void exitshell(int r)//exit shell.  
{
	if(r==300){ //use this when exit or quit command
		exit(0);
	}
	exit(r);
} //its a useless dummy but I let it be alive because i probably reuse it later


void fatal_error(char* whatiswrong) // to record error and exit
{
	perror(whatiswrong);
	exitshell(-1);
}



void prompt(){ //show current location
	
	char buffer[MAX_LENGTH];
	getcwd(buffer,MAX_LENGTH);
	printf("151779ChuneheonLee:%s>>",buffer);
	
}

int cdexitcommands(char** command) // cd, exit command
{
	 if(strcmp(command[0],"exit")==0) exitshell(300); //exit command
     if(strcmp(command[0],"quit")==0) exitshell(300); //quit command 
 
     if(strcmp(command[0],"cd")==0) // cd command
	 	{  
			  if(chdir(command[1])<0)
			  	fatal_error("wrong cd location");

				return 1;
        }
			return 0; 
}
// if we had used cd command after fork,
// child process would have moved to a new place
// but parent process would have never changed.


char **parse_input(char *input) //get input and parse them
{
	char **command = malloc(ARR_LENGTH*sizeof(char *));
	char *delim =" ";
	char *parsed;

	if(command == NULL) fatal_error("outofmemory");

	int index =0;

	parsed = strtok(input,delim); //I tried to use strtok_r but
				     //it didn't work well for me

	while(parsed != NULL)
	{
			if(parsed[strlen(parsed)-1]=='\n')
				parsed[strlen(parsed)-1]='\0';
				
			command[index++] = parsed;
			parsed = strtok(NULL,delim);
	}

	command[index] = NULL;

	return command;
}

void record_history(char* input) //record history and didnt use readline
{

	 

	FILE *fp = NULL;
      
       	fp= fopen(historypath,"a");

	if(!fp){
		fatal_error("file system error to record !");
	}
	
//if(input[strlen(input)-1] == EOF) input[strlen(input)-1] = '\0';
	//change EOF into '\0'

	fprintf(fp,input);
	fprintf(fp,"\n");
	fclose(fp);
}
//I tried to use historypath as in ~/ like ~/.bash_history
//but it didnt work because of permission?
//and, this function is slowly because of I/O but it is fine for shell

void repeat_command(char* scanner)
{

	 if(scanner[strlen(scanner)-1] =='\n')   
		 scanner[strlen(scanner)-1]='\0';

	
	  char **newinput = parse_input(scanner);
 
             if(cdexitcommands(newinput))
             {
                 exitshell(0);
             }
             else if(history_command(newinput))
             {
                 //recall history command
             }
             else if(execvp(newinput[0],newinput)<0)
                         {
                                 fatal_error("unknown command");
                                 //if this function is actived,
                                 //something is wrong
                         }

						 exitshell(0);
}

int history_command(char** input)
{
	char *commands[] = {"history","!!",NULL};
	int index = 0;
	
	FILE *fp;

	while(1)
	{
		if(commands[index] ==NULL)
		{
			if(input[0][0] == '!')
			{
				break; // "!";
			}
			return 0; //doesnt have history command
		}			
		
		if(strcmp(commands[index],input[0])==0)
			break;
		
		 index++; 
	} // find history command, if we cant find, return
	// and execute next command

	fp = fopen(historypath,"r");

	if(!fp)
	{
		fatal_error("failed to read history");
	}//failed to open


	 index =1; //reuse
	char scanner[MAX_LENGTH]; // read file string on this char array

	if(strcmp("history",input[0])==0) //history command
	{
		if(input[1] ==NULL){ //just history

			while(fgets(scanner,MAX_LENGTH,fp)!=NULL)
			{
				printf(" %4d %s",index++,scanner);
			} // print history command
		
			
		}
		else if(strcmp(input[1],"-w")==0) //history -w text
		{
			if(input[2]==NULL)
			{
				fatal_error("wrong history command");
			}
			if(input[3]!=NULL)
			{
				fatal_error("dont put space between words");
			}

				FILE *createfile=NULL;

				char path[MAX_LENGTH+10] = "./";
				int mystrcat = 2;
				int len=0;

				for(;mystrcat<strlen(input[2])+2; mystrcat++)
				{
					path[mystrcat]=input[2][len++];
				}
				
				createfile = fopen(path,"w");
				
				if(!createfile || !fp)
				{
					fatal_error("failed to write");
				}
				
				while(fgets(scanner,MAX_LENGTH,fp)!=NULL)
				{
					fprintf(createfile,"%4d\t%s",index++,scanner);
				}
				fclose(createfile);
			} //record history as name
		
		else if(strcmp(input[1],"-c")==0) // history -c clear
		remove(historypath);
		//i hear about that linux history that saved in file
		//is not really d, but my version removes 
		
		else if(strcmp(input[1],"|")==0) //primitive grep command
		{
			if(strcmp(input[2],"grep")!=0) fatal_error("wrong history command");
			if(input[3] ==NULL) fatal_error("wrong history command");
			if(input[4] !=NULL) fatal_error("dont put space between words");

			while(fgets(scanner,MAX_LENGTH,fp)!=NULL)
			{
			int psindex=0;
			char scancpy[MAX_LENGTH];
			strcpy(scancpy,scanner);
			char **grep = parse_input(scancpy);

				while(grep[psindex] != NULL)
				{

					if(strcmp(input[3],grep[psindex])==0)
					{
						printf("%4d\t%s",index,scanner);
					}
					psindex++;
				}

			index++;
			}
		}
		else if(atoi(input[1])) //history n 
		{ 

			int num = atoi(input[1]);
			char arr[MAX_LENGTH][MAX_LENGTH];

			index =0;
			  while(fgets(scanner,MAX_LENGTH,fp)!=NULL)
             {
			 	strcpy(arr[index++],scanner);
             } 
			
			int i=0;

			if(num>=index-1)  // if num is more bigger, print all
				for(i=0; i<index; i++)
				{
					printf("%4d\t%s",i+1,arr[i]);
				}
			else	while(i<index	&& i<num) //else, print asked mess
			{
				printf("%4d\t%s",(index-num+i),arr[index-num+i]);
				i++;
			}
		}
		else fatal_error("wrong history command"); //dummy
	}
	else if(strcmp("!!",input[0])==0) // !! command
	{
		if(input[1] == NULL);
		{
			int index;
			char scans[MAX_LENGTH];
			char old_scans[MAX_LENGTH];

			strcpy(old_scans,scanner);
			strcpy(scans,scanner);

			while(fgets(scanner,MAX_LENGTH,fp)!=NULL)
			{
				strcpy(old_scans,scans);
				strcpy(scans,scanner);
			}
             //find last order as scanner array
				
			fclose(fp);
			repeat_command(old_scans); //repeat command function	
		}

	}
	else //! command
	{
		if(input[1] == NULL) //!n-th integer
		{
			char newarray[MAX_LENGTH+1];
			int i=1;
			
			memset(newarray,0,sizeof(newarray));
		
			for(; i<strlen(input[0]); i++)
			{
				newarray[i-1] = input[0][i];
			}

			if(newarray[strlen(newarray)-1] == '\n') 
				newarray[strlen(newarray)-1] = '\0';
		
			if(atoi(newarray)) //find ith index
			{
				int number = atoi(newarray);
				index = 1;
				while(fgets(scanner,MAX_LENGTH,fp)!=NULL)
				{
					if( index == number)
					{	
						index = -1;
						break;
					}
					index ++;
				}
				
				if(index == -1) printf("%4d\t%s",number,scanner);
				else
				{
				fatal_error("we can't excute your command because input number is bigger than historys length");
				}
			}
			else //like !s command
			{
				index =1;
				while(fgets(scanner,MAX_LENGTH,fp)!=NULL)
                 {
				 	
				 	if(strstr(scanner,newarray))
						printf("%4d\t%s",index,scanner);
					index++;
                 }

			}
		}
		else fatal_error("wrong ! command"); 
	
	}

	fclose(fp);
	exitshell(0);	
}



int main()
{
	printf("151779 chungheon Lee\n");
	char **command; //get parsed words, command[0] is command,
      		        //others option
	char input[MAX_LENGTH]; //scan string
	pid_t pid; //pid

	while(1){
		prompt();
		
		char c;
		int indexforc=0;
		
		if(!fgets(input,MAX_LENGTH,stdin)) break;
		//EXit if reading is not from stdin
	
		 if(input[0] =='\n')
                {
                        continue;
                }//if just enter, continue

		if(input[strlen(input)-1]=='\n') input[strlen(input)-1]='\0';
		
		/*
		while((c=getchar()))
		{
			if(c == EOF || c == '\n')
			{
				input[indexforc] = '\0'; 	
				break;	
			}		
			
			input[indexforc++] = c;
		}
		
		if(input[0] =='\0')
		{
			continue;
		}
		*/
		char cpy[MAX_LENGTH]; //for record
		strcpy(cpy,input);

		command = parse_input(input);

		int statofloc; // get  child process's state when child process
		        	//is done
		if(strcmp(command[0],"!!") == 0) //for !! to use cd
		{
			FILE * fp = fopen(historypath,"r+");
			if(!fp) fatal_error("read failed");
			char scanner[MAX_LENGTH];

			while(fgets(scanner,MAX_LENGTH,fp)!=NULL){}
			
			 if(scanner[strlen(scanner)-1] =='\n')   
				 scanner[strlen(scanner)-1]='\0';
			command = parse_input(scanner);
			

			fclose(fp);

			if(strcmp("cd",command[0])==0)
			{
				  if(chdir(command[1])<0){
                                fatal_error("wrong cd location");
				  }
				  else {
					  record_history(cpy);
					  continue;
				}
			}	
		}
		
		   record_history(cpy); // record input

		if(cdexitcommands(command))
			continue; //skip fork
			// if we had used cd command after fork,
			// child process would have moved to a new place
			// but parent process would have never changed.

		 if((pid = fork()) == 0){ // child
			
			if(history_command(command))
			{
				//history command	
			}

			 if(execvp(command[0],command)<0)
			{
				fatal_error("unknown command");
				//if this function is actived,
				//something is wrong

			}
			//as child process, never return if execvp
			//function is successfully worked.
		 }
		  if(pid < 0) //error
		{
			fatal_error("pid ERROR");
		}
		else //parent
		{
			
			waitpid(pid,&statofloc, WUNTRACED);
			//wait till child process is done.
			//
		}
	
	}
	
	free(command);

	exitshell(0);
}


