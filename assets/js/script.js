// 1.1

const customer = {
    firstName: 'Olya',
    lastName: 'Kapustynska',
    email: 'oliakapustynska@gmail.com',
    password: 'qwerty',
    phoneNumber: '+380679938866',
    address: {
        city: 'Zhydachiv',
        street: 'Valova',
        house: '20'
    },
    getAddress: function() {
        return `${this.address.city}, ${this.address.street}, ${this.address.house}`;
    },
    changePhoneNumber: function(newNumber) {
        this.phoneNumber = newNumber;
    }
};

customer.isMale = false;
delete customer.address;

const customerCopy1 = Object.assign({}, customer);
const customerCopy2 = { ...customer };

console.log(customer);

// 1.2

const cat = {
    name: 'Laska',
    color: 'red',
    isMale: false,
    isFurnitureDamage: false
};

for (const properties in cat) {
    console.log(`${properties}: ${cat[properties]}`);
}

// 1.3

function Book(author, title, year, publisher, price) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
    this.price = price;
    
    this.calculateAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    };

    this.changePrice = function(newPrice) {
        this.price = newPrice;
    };
}

const book1 = new Book('Gregory David Roberts', 'Shantaram', 2003, 'Scribe Publications', 30.00);
const book2 = new Book('Gregory David Roberts', 'The Mountain Shadow', 2015, { city: 'Sidney', name: 'Grove Press' }, 25.00);

console.log(book1);
console.log(book2);