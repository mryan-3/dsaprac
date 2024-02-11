#include <iostream>
using namespace std;

int sum(int arr[], int length) {
  int sum = 0;
  for (int i = 0; i < length; i++) {
    sum += arr[i];
  }
  return sum;
}

int main() {


  int arr[4];

  cout << "Please enter 4 integers:" << endl;

  for (int i = 0; i < 4; i++) {
    cin >> arr[i];
  }

  int length = sizeof(arr) / sizeof(arr[0]);
  //final
  cout << "Sum: " << sum(arr, length) << endl;
}
