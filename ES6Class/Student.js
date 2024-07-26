class Student {
    
    constructor(fname='', lname='', age=0) {
        console.log('Inside student');
        
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
 }

 const st1 = new Student('Ram', 'S', 26);