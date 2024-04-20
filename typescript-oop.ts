class Contact {
    private name: string;
    private phoneNumber: string;
    private address: string;

    constructor(name: string, phoneNumber: string, address: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public getName(): string {
        return this.name;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }
}

class BusinessContact extends Contact {
    private company: string;

    constructor(name: string, phoneNumber: string, address: string, company: string) {
        super(name, phoneNumber, address);
        this.company = company;
    }

    public getCompany(): string {
        return this.company;
    }
}

// Example usage:
const personalContact = new Contact("John Doe", "123-456-7890", "123 Main St");
console.log(personalContact.getName()); // Output: John Doe
console.log(personalContact.getPhoneNumber()); // Output: 123-456-7890
console.log(personalContact.getAddress()); // Output: 123 Main St

const businessContact = new BusinessContact("Jane Smith", "456-789-0123", "456 Broadway", "ABC Company");
console.log(businessContact.getName()); // Output: Jane Smith
console.log(businessContact.getPhoneNumber()); // Output: 456-789-0123
console.log(businessContact.getAddress()); // Output: 456 Broadway
console.log(businessContact.getCompany()); // Output: ABC Company

businessContact.setAddress("789 Oak St");
console.log(businessContact.getAddress()); // Output: 789 Oak St
