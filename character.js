export class Character{
    constructor(character){
        this.character = character
    }

    #choose(list){
        const iterator = Math.floor(Math.random() * list.length)
        const value = list[iterator] 
        
        return value            
    }

    chooseName(){
        if(this.character.name){
            const newName = this.#choose(this.character.name)
            return newName
        }
    }

    chooseCity(){
        if(this.character.city){
            const newCity = this.#choose(this.character.city)
            return newCity
        }
    }

    chooseNationality(){
        if(this.character.nationality){
            const newNationality = this.#choose(this.character.nationality)
            return newNationality
        }
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
        
        if(iterator[this.character.age[0]]){
            const ageValue = (Math.ceil(Math.random() * iterator[this.character.age[0]].modifier)) + iterator[this.character.age[0]].minimum

            return ageValue
        }
        
        return 'Insert young, adult or old'
    }

    default(){
        const defaultCharacter = {
            name: this.chooseName(),
            city: this.chooseCity(),
            nationality: this.chooseNationality(),
            age: this.chooseAge()
        }

        return defaultCharacter
    }
}