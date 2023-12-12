package airporteyup;

public class Engine {
    private String fueltype;
    private float currentFuel;
    private float horsepower;

    //Constructor
    public Engine(String fueltype, float currentFuel, float power) {
        this.fueltype = fueltype;
        this.currentFuel = currentFuel;
        this.horsepower = power;
    }
    public void start(){
        System.out.println("starting");
    }

    public void stop(){
        System.out.println("stopping");
    }


    //Getter and Setter
    public String getFueltype() {
        return fueltype;
    }

    public void setFueltype(String fueltype) {
        this.fueltype = fueltype;
    }

    public float getCurrentFuel() {
        return currentFuel;
    }

    public void setCurrentFuel(float currentFuel) {
        this.currentFuel = currentFuel;
    }

    public float getPower() {
        return horsepower;
    }

    public void setPower(float power) {
        this.horsepower = horsepower;
    }
}
