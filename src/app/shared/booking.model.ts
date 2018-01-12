
export class Booking {
    public fullName: string;
    public email: string;
    public iphoneModel: string;
    public phoneNumber: string;


    constructor(fullName: string, email: string, iphoneModel: string, phoneNumber:string) {
        this.fullName = fullName;
        this.email = email;
        this.iphoneModel = iphoneModel;
        this.phoneNumber = phoneNumber;
    }
}
