#include <stdio.h>

int main(){
    int arr [] = {1, 3, 4, 6 , 78 ,86, 544, 3, 2, 1, 14};

    int i = 0;

    for(int j = 1; j < 11; j++) {
        if (arr[j] != arr[i]){
            i++;
            arr[i]= arr[j];
        }
    }
    for (i = 0; i<10;i++){
        printf("%d\n", arr[i]);
    }
    return 0;
}
