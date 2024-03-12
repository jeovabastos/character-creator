export class Character{
    constructor({name, city, nationality, age}){
        this.name = name 
        this.city = city
        this.nationality = nationality
        this.age = age
    }

    choose(list){
        const iterator = Math.floor(Math.random() * list.length)
        const value = list[iterator] 
        
        return value            
    }

    chooseName(){
        const newName = this.choose(this.name)
        this.name = newName
        return newName
    }

    chooseCity(){
        const newCity = this.choose(this.city)
        this.city = newCity
        return newCity
    }

    chooseNationality(){
        const newNationality = this.choose(this.nationality)
        this.nationality = newNationality
        return newNationality
    }

    chooseAge(){
        const iterator = {
            young: {
                modifier: 15,
                minimum: 4
            },
            adult: {
                modifier: 25,
                minimum: 15
            },
            old: {
                modifier: 50,
                minimum: 45
            },
        }
        
        if(iterator[this.age]){
            const ageValue = (Math.ceil(Math.random() * iterator[this.age].modifier)) + iterator[this.age].minimum

            this.age = ageValue
            return ageValue
        }
        
        return 'Insert young, adult or old'
    }
}