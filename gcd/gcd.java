import java.util.Scanner;
import java.util.stream.Stream;

class gcd {
    public static void main(String[] args) {
        Scanner readIn = new Scanner(System.in);
        while (true) {
            int[] inp = Stream.of(readIn.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            if (inp.length == 1 && inp[0] == 0) {
                break;
            }
            int tmpGCD = inp[0];
            for (int i = 1; i < inp.length; i++) {
                tmpGCD = calcGCD(tmpGCD, inp[i]);
            }
            System.out.println("The gcd of the integers is " + Math.abs(tmpGCD) + ".");
        }
    }
    static int calcGCD(int a, int b) {
        return b==0 ? a : calcGCD(b, a%b);
    }
}