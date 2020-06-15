function getResult(a,b,c){
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let x;
    if (discriminant > 0) {
        x = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
    } else if (discriminant === 0) {
        x = [-b / 2 *a];
    } else {
        x = [];
    }

    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let averageMark;
    if (marks.length === 0) {
        averageMark = 0;
    } else if (marks.length > 5) {
        console.log('Количество оценок больше пяти');
        marks.splice(5);
        let summarks = 0;
        for (let i = 0; i < marks.length; i++) {
            summarks += marks[i];
        }
        averageMark = summarks / marks.length;
    } else if (marks.length <= 5) {
        let summarks = 0;
        for (let i = 0; i < marks.length; i++) {
            summarks += marks[i];
        }
        averageMark = summarks / marks.length;
    }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let result;
    let years = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (years >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else if (years < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}