function takeShower(): string {
    console.log(`Showering!`)
    return "Showering!"
}

function eatBreakfast(): string {
    let meal = cookFood()
    console.log(`Eating ${meal}`)
    return `Eating ${meal}`
}

function cookFood(): string {
    let items: string[] = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random() * items.length)]
}

function wakeUp(): any {
    takeShower()
    eatBreakfast()
    console.log("Ready to go to work now")
}

wakeUp()