package airporteyup;

public class Main {
    public static void main(String[] args) {
        Engine e1 = new Engine("diesel", 2,51);
        Engine e2 = new Engine("djw",41,92);

        Plane p1 = new Plane("white", 24, 95, 19, 82, 4, 92);
        Hangar h1 = new Hangar(1,1,"red");
        System.out.println(p1.getColor());
    }
}
