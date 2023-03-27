class Pilot {
    constructor(name, lastName, birthdate) {
        this.name = name;
        this.lastName = lastName;
        this.birthdate = new Date(birthdate)
        this.flyingLicense = false;
    }

    generateFlyingLicense() {
        let license = ''
        for(let i = 0; i < 5; i++) {
            license += this.lastName[i] ? this.lastName[i].toUpperCase() : "9"
        }
        
        license += '-' + this.birthdate.getFullYear().toString()[2]
        license += this.getBirthdateFullMonth()
        license += this.birthdate.getFullYear().toString()[3] + "." + this.name[0].toLowerCase()

        this.flyingLicense = license
    }

    getBirthdateFullMonth() {
        if(this.birthdate.getMonth() < 9) {
            return `0${this.birthdate.getMonth() + 1}`
        } else {
            return `${this.birthdate.getMonth() + 1}`
        }
    }
}



const pilot1 = new Pilot("John", "Doe", "05-25-1977")
const pilot2 = new Pilot("Hal", "Jordan", "09-02-1995")
const pilot3 = new Pilot("Carol", "Danvers", "08-17-1968")
const pilot4 = new Pilot("Poe", "Dameron", "03-09-1979")


pilot1.generateFlyingLicense()
pilot2.generateFlyingLicense()
pilot3.generateFlyingLicense()
pilot4.generateFlyingLicense()

console.log(pilot1)
console.log(pilot2)
console.log(pilot3)
console.log(pilot4)