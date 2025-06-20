

public class ThirdLargestElement {
    
        public static void main(String[] args) {
            int[] arr = {10, 20, 4, 45, 99, 35};
    
            // Check if the array has at least three elements
            if (arr.length < 3) {
                System.out.println("Array must have at least three distinct elements.");
                return;
            }
    
            int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE, third = Integer.MIN_VALUE;
    
            for (int num : arr) {
                if (num > first) {
                    third = second;
                    second = first;
                    first = num;
                } else if (num > second) {
                    third = second;
                    second = num;
                } else if (num > third) {
                    third = num;
                }
            }
    
            System.out.println("The third largest element is: " + third);
        }
    }
       



    