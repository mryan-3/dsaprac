#include <stdio.h>

int main()
{
    int arr[] = {34, 56, 54, 32, 67, 89, 90, 32, 21};
    int i;
    for (i=0;i<9;i++) {
        printf("%d\n", arr[i]);

    }
    //Reversing the order of the array
    printf("\n");
    int x;
    for (i=8; i>=0; i--){
        printf("%d\n", arr[i]);
    }
    return 0;
}
