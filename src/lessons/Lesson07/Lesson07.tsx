function Lesson07() {
    // Тип any - любой тип
    let city: any = 'Berlin';
    city = 2321112;
    city = [2343, 'London', true]

    // Типизация обьекта через interface
    interface User {
       name: string,
       // при использовании знака вопроса, свойство можно не припимывать
       age?: number
       // при использовании union - number | underfined, свойство должно быть, но его значение может быть underfined
     //  age: number | undefined
    } 
    
    const userData: User = {
        name: 'Jhon',
        age: 89
    }

    const userObj: User = {
        name: 'Marta',
    //    age: undefined
    }

    // Создание интерфейса с одинаковым именем
    interface User {
        role?: string | null,
        // при добавлении новых свойств с типами, используя, одноименные ннтерфейсы,
       // переписывать старые свойства нельзя!!
      //  age: string
    }

    const user: User = {
        name:'Tom',
        role: null
    }

    // Наследование интерфейса
    interface Person {
        personFullName: string,
        email: string
    }

    interface Admin extends Person {
        adminId: number
    }

    const personData: Person = {
        personFullName: 'Bob Smith',
        email: 'test@gmail.com'
    }

    const adminData: Admin = {
        personFullName: 'Jhon Jhonson',
        adminId: 13435,
        email: 'j@mail.com'
    }

    // Типизация через type

    // импользуем type для создания усложненного типа
    type Weight = string | number | null

    // импользуем type для создания типа оюбекта
    type Animal = {
        name: string,
        weight?: Weight
    }

    const animalData: Animal = {
        name: 'Lion',
        weight: 200
    } 

    const personWeight: Weight = null;

    // обьединение типов
    type NewAnimal = Animal & {country: string}

    const zebraAnimal: NewAnimal = {
        name: 'Zebra',
        weight: '150',
        country: 'Afrika'
    }

    // Generic & Type - дженерик это переменная в которую мы можем подставить
    // нужный тип, в момент импользования type
    type CustomTupel<T = string> = [number, string, T];

    const arrayMix: CustomTupel<boolean> = [23, 'Bob', true]
    const arrayMix2: CustomTupel<number> = [45, 'Tom', 2355]
    const arrayMix3: CustomTupel = [50, 'Mary', '34']
    
    // Generic & Interface
    interface Fruit<T = number> {
        title: string,
        address: T
    }

    const fruit1: Fruit = {
        title: 'Apple',
        address: 23746
    }

    const fruit:  Fruit<string> = {
        title: 'Grape',
        address: 'Berlin 32342'
    }
        // const result: Fruit<string> = await fetch('sdf')

        // const result: Fruit = await fetch('sdfdf')

        // Пример использования union для ограничения переменной по значениям
        type Status = 'success' | 'error' | 'loading';

        const status: Status = 'error';
       // const apiStatus: Status = 'default';

       // --- Числовое перечисление
       enum Colors { Red, Black, Green = 1 };
       let currentColor:Colors = Colors.Black;
       console.log(currentColor);

       // --- Cтроковое перечисление
       // enum для цветов светофора
       enum TRAFFIC_LIGHT {
        RED = 'red',
        YELLOW = 'yellow',
        GREEN = 'green'
       }

       const getAction = (light: TRAFFIC_LIGHT): string=>{
        switch (light){
            case TRAFFIC_LIGHT.RED :
                return 'Стоп!'; 
                case TRAFFIC_LIGHT.YELLOW :
                return 'Приготовьтесь идти';
                case TRAFFIC_LIGHT.GREEN :
                return 'Можно идти'
        }

       }
       console.log(getAction(TRAFFIC_LIGHT.GREEN));
       
       // --- Mixed enum (строки и числа)
       enum RESULT {
        YES = 'yes',
        NO = '0'
       }

       const result: RESULT = RESULT.NO;
       console.log(result);
        
       
    return (
        <div className="lesson07-wrapper">
        TS-lesson07
        </div>
    )
}

export default Lesson07;