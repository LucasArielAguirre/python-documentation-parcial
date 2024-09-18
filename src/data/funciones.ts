export interface Funciones{
    funcion: string;
    descripcion: string;
    ejemplo:string;
}

export const todasLasFunciones: Funciones[] =[
    {
        funcion: "Sets",
        descripcion: "Los sets son otro tipo de estructuras de datos. Se diferencian de listas, tuplas y diccionarios porque son una colección mutable de elementos inmutables, no ordenados y sin datos repetidos.",
        ejemplo: "[1, 2, 3, 3, 4, 4, 5]"
    },

    {
        funcion: "Add(item)",
        descripcion: "Agrega un nuevo elemento al set.",
        ejemplo:`mi_set_a.add(5)
                print(mi_set_a)
                >> {1, 2,"tres", 5}`
    },
    {
        funcion: "Clear()",
        descripcion:"Remueve todos los elementos de un set.",
        ejemplo:`mi_set_a.clear()
                print(mi_set_a)
                >> set()`,
    },
    {
        funcion: "Copy()",
        descripcion:"Crea una copia de un set.",
        ejemplo:`mi_set_a_copia = mi_set_a.copy()
                print(mi_set_a_copia)
                >> {1, 2, "tres", 5}`
    },
    {
        funcion: "Difference(set)",
        descripcion:"Devuelve un nuevo set que contiene los elementos que están en el set A y no en el otro.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {5, 6, 7, 8}
                mi_set_diferencia = mi_set_a.difference(mi_set_b)
                print(mi_set_diferencia)
                >> {1, 2, "tres"}`
    },
    {
        funcion: "Difference_update(set)",
        descripcion:"Actualiza el set A eliminando los elementos que están en el set B.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {5, 6, 7, 8}
                mi_set_a.difference_update(mi_set_b)
                print(mi_set_a)
                >> {1, 2, "tres"}`
    },
    {
        funcion: "Discard(item)",
        descripcion:"Remueve el elemento de un set si este existe.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_a.discard(5)
                print(mi_set_a)
                >> {1, 2, "tres"}`
    },
    {
        funcion: "Intersection(set)",
        descripcion:"Devuelve un nuevo set que contiene los elementos que están en ambos sets.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {5, 6, 7, 8}
                mi_set_interseccion = mi_set_a.intersection(mi_set_b)
                print(mi_set_interseccion)
                >> {5}`
    },
    {
        funcion: "Intersection_update(set)",
        descripcion:"Actualiza el set A agregando los elementos que están en el set B, y remueve los que no.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {5, 6, 7, 8}
                mi_set_a.intersection_update(mi_set_b)
                print(mi_set_a)
                >> {5}`
    },
    {
        funcion: "Isdisjoint(set)",
        descripcion:"Devuelve True si no hay elementos en común entre los sets, de lo contrario devuelve False.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {5, 6, 7, 8}
                print(mi_set_a.isdisjoint(mi_set_b))
                >> False`
    },
    {
        funcion: "Issubset(set)",
        descripcion:"Devuelve True si todos los elementos del set A están en el set B, de lo contrario devuelve False.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {1, 2, 5}
                print(mi_set_a.issubset(mi_set_b))
                >> True`
    },
    {
        funcion: "Issuperset(set)",
        descripcion:"Devuelve True si todos los elementos del set B están en el set A, de lo contrario devuelve False.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {1, 2, 5}
                print(mi_set_a.issuperset(mi_set_b))
                >> True`
    },
    {
        funcion: "Pop()",
        descripcion:"Remueve y devuelve un elemento aleatorio del set",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                print(mi_set_a.pop())
                >> 1`
    },
    {
        funcion: "Remove(item)",
        descripcion:"Remueve el elemento del set si este existe.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_a.remove(5)
                print(mi_set_a)
                >> {1, 2, "tres"}`
    },
    {
        funcion: "Symmetric_difference(set)",
        descripcion:"Devuelve un nuevo set que contiene los elementos que están en uno de los sets pero no en ambos.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {5, 6, 7, 8}
                mi_set_diferencia_simetrica = mi_set_a.symmetric_difference(mi_set_b)
                print(mi_set_diferencia_simetrica)
                >> {1, 2, 6, 7, 8}`
    },
    {
        funcion: "Symmetric_difference_update(set)",
        descripcion:"Actualiza el set A agregando los elementos que están en uno de los sets pero no en ambos, y remueve los que están en ambos.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {5, 6, 7, 8}
                mi_set_a.symmetric_difference_update(mi_set_b)
                print(mi_set_a)
                >> {1, 2, 6, 7, 8}`
    }, 
    {
        funcion: "Union(set)",
        descripcion:"Devuelve un nuevo set que contiene todos los elementos de los sets, Eliminando datos duplicados.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_set_b = {5, 6, 7, 8}
                mi_set_union = mi_set_a.union(mi_set_b)
                print(mi_set_union)
                >> {1, 2, 5, 6, 7, 8, "tres"}`
    },
    {
        funcion: "Update(iterable)",
        descripcion:"Agrega los elementos del iterable al set.",
        ejemplo:`mi_set_a = {1, 2, "tres", 5}
                mi_iterable = [5, 6, 7, 8]
                mi_set_a.update(mi_iterable)
                print(mi_set_a)
                >> {1, 2, 5, 6, 7, 8, "tres"}`
    },
    {
        funcion: "Diccionarios",
        descripcion:"Los diccionarios son estructuras de datos que almacenan informacion en pares clave:valor. Son especialmente utiles para guardar y recuperar informacion a partir de los nombres de sus claves (No utilizan indices).",
        ejemplo:`mi_diccionario = {"nombre": "Juan", "apellido": "Perez", "edad": 30}`,
    },
    {
        funcion: "Agregar datos al diccionario",
        descripcion:"Para agregar datos a un diccionario utilizamos la sintaxis [clave]:[valor].",
        ejemplo:`mi_diccionario["direccion"] = "Calle 123"`
    },
    {
        funcion: "Acceder a valores del diccionario",
        descripcion:"Para acceder a los valores de un diccionario utilizamos la sintaxis [clave].",
        ejemplo:`print(mi_diccionario["apellido"[1]])`
    },
    {
        funcion: "Listas",
        descripcion:"Las listas son estructuras de datos que almacenan informacion en un orden secuencial. Son mutables, permiten agregar, eliminar y reordenar elementos.",
        ejemplo:`mi_lista = ["Juan", "Perez", 30]`
    },
    {
        funcion: "Indexado en la lista",
        descripcion:"Podemos acceder a los elementos de una lista a través de sus indices [inicio:fin:paso]",
        ejemplo:`lista_1 = ["C", "C++", "Python", "Java",]
        lista_2 = ["PHP", "SQL", "Visual Basic"]
        print(lista_1[1:3])
        >> ["C++", "Python"]`
    },
    {
        funcion: "List Comprehension",
        descripcion: "Permite crear listas de manera concisa aplicando una expresión sobre cada elemento de un iterable.",
        ejemplo: `mi_lista = [x**2 for x in range(5)]
        print(mi_lista)  # Salida: [0, 1, 4, 9, 16]`
    },
    {
        funcion: "Cantidad de elementos de la lista",
        descripcion:"Para obtener la cantidad de elementos de una lista utilizamos la función len()",
        ejemplo:`lista_1 = ["C", "C++", "Python", "Java",]
        print(len(lista_1))
        >> 4`
    },
    {
        funcion: "Concatenacion de elementos en listas",
        descripcion:"Para concatenar dos listas utilizamos la operacion +",
        ejemplo:`lista_1 = ["C", "C++", "Python", "Java",]
        lista_2 = ["PHP", "SQL", "Visual Basic"]
        lista_3 = lista_1 + lista_2
        print(lista_3)`
    },
    {
        funcion: "Funcion append()",
        descripcion:"Agrega un elemento al final de una lista utilizando la función append()",
        ejemplo:`lista_1 = ["C", "C++", "Python", "Java",]
        lista_1.append("Go")
        print(lista_1)
        >> ["C", "C++", "Python", "Java", "Go"]`
    },
    {
        funcion: "Funcion insert()",
        descripcion:"Agrega un elemento en una posicion determinada de una lista utilizando la función insert()",
        ejemplo:`lista_1 = ["C", "C++", "Python", "Java"]
        lista_1.insert(2, "Go")
        print(lista_1)
        >> ["C", "C++", "Go", "Python", "Java"]`
    },
    {
        funcion:"Funcion pop()",
        descripcion:"Remueve y devuelve el elemento en la posicion especificada.",
        ejemplo:`lista_1 = ["C", "C++", "Python", "Java"]
        print(lista_1.pop(1))
        >> ["C++"]`
    },
    {
        funcion: "Funcion Sort()",
        descripcion: "Ordena los elementos de una lista.",
        ejemplo: `lista_1 = [5,4,7,1,9]
        lista_1.sort()
        print(lista_1)
        >>[1,4,5,7,9]`
    },
    {
        funcion: "Funcion Reverse()",
        descripcion:"Invierte el orden de los elementos de una lista",
        ejemplo: `lista_1 = [5,4,7,1,9]
        lista_1.reverse()
        print(lista_1)
        >>[9,7,4,1,5]`
    },
    {
        funcion: "Tuplas",
        descripcion: "Las tuplas son estructuras de datos que almacenan informacion en un orden secuencial. Son inmutables, permiten agregar, eliminar y reordenar elementos.",
        ejemplo: `mi_tuple = (1,"dos", [3.33,"cuatro"],(5.0, 6))`
    },
    {
        funcion: "Indexado en la tupla",
        descripcion: "Podemos acceder a los elementos de una tupla a través de sus indices [inicio:fin:paso]",
        ejemplo: `mi_tuple = (1,"dos", [3.33,"cuatro"],(5.0, 6))
        print(mi_tuple[3][0])
        >> ("dos", [3.33, "cuatro"])`
    },
    {
        funcion: "Casting en tuplas",
        descripcion: "Podemos convertir una tupla en una estructura mutable, en este caso una lista.",
        ejemplo: `mi_tuple = (1,"dos", [3.33,"cuatro"],(5.0, 6))
        mi_list = list(mi_tuple)
        print(mi_list)
        >> [1, "uno", [3.33, "cuatro"], (5.0, 6)]`
    },
    {
        funcion: "Unpacking",
        descripcion: "Podemos descomponer una tupla en variables separadas.",
        ejemplo: `mi_tuple = (1,"dos", [3.33,"cuatro"],(5.0, 6))
        x, y, z, w = mi_tuple
        print(x)
        >> 1`
    },
   {
        funcion: "operadores logicos",
        descripcion: "Los operadores logicos permiten   comparar valores y tomar decisiones basadas en el     resultado.",
        ejemplo: `== igual a
        != difrente a
        > mayor que
        < menor que
        >= mayor o igual que
        <= menor o igual que
        and y(True si dos declaraciones son True)
        or o(True si alguna de las declaraciones es True)
        not no(Invierte el valor del booleano)`
    },
    {
        funcion: "Encapsulamiento",
        descripcion: "El encapsulamiento es el mecanismo de restringir el acceso directo a los atributos y métodos de una clase, ocultando su estado interno. En Python, esto se implementa utilizando guiones bajos para indicar que un atributo o método es 'privado'.",
        ejemplo: `class Persona:
    def __init__(self, nombre, edad):
        self._nombre = nombre  # atributo 'privado'
        self._edad = edad  # atributo 'privado'
        
    def get_nombre(self):
        return self._nombre

    def set_nombre(self, nuevo_nombre):
        self._nombre = nuevo_nombre

    persona = Persona("Juan", 30)
    print(persona.get_nombre()) 
    >>Salida: Juan
    persona.set_nombre("Carlos")
    print(persona.get_nombre())
    >>Salida: Carlos`
    },
    {
        funcion: "Herencia",
        descripcion: "La herencia permite que una clase (clase hija) herede atributos y métodos de otra clase (clase padre). Esto facilita la reutilización del código y la creación de relaciones jerárquicas.",
        ejemplo: `class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hacer_sonido(self):
        return "Sonido genérico"

    class Perro(Animal):  # Perro hereda de Animal
    def hacer_sonido(self):
        return "Ladrido"

    mi_perro = Perro("Fido")
    print(mi_perro.nombre) 
    >> Salida: Fido
    print(mi_perro.hacer_sonido())  
    >>Salida: Ladrido`
    },
    {
        funcion: "Polimorfismo",
        descripcion: "El polimorfismo permite que objetos de diferentes clases puedan ser tratados de manera uniforme, usando la misma interfaz o método. Python permite el polimorfismo a través de la sobreescritura de métodos en clases heredadas.",
        ejemplo: `class Animal:
    def hacer_sonido(self):
        return "Sonido genérico"

    class Perro(Animal):
        def hacer_sonido(self):
            return "Ladrido"

    class Gato(Animal):
        def hacer_sonido(self):
            return "Maullido"

    # Polimorfismo en acción
    animales = [Perro(), Gato(), Animal()]

    for animal in animales:
        print(animal.hacer_sonido())

    >>Salida:
    Ladrido
    Maullido
    Sonido genérico`
    },
    {
        funcion: "Getters",
        descripcion: "Los getters son métodos que permiten acceder a los atributos de una clase de forma controlada. Son útiles para validar o manipular los datos antes de retornarlos.",
        ejemplo: `class CuentaBancaria:
    def __init__(self, saldo):
        self._saldo = saldo  # Atributo 'privado'
    
    @property
    def saldo(self):
        return self._saldo  # Método getter
    
    cuenta = CuentaBancaria(1000)
    print(cuenta.saldo)  
    >> Salida: 1000`
    },
    {
        funcion: "Setters",
        descripcion: "Los setters son métodos que permiten modificar los atributos de una clase de manera controlada. Usualmente se utilizan junto con los getters para validar o cambiar el valor de un atributo.",
        ejemplo: `class CuentaBancaria:
    def __init__(self, saldo):
        self._saldo = saldo  # Atributo 'privado'

    @property
    def saldo(self):
        return self._saldo  # Getter

    @saldo.setter
    def saldo(self, nuevo_saldo):
        if nuevo_saldo < 0:
            raise ValueError("El saldo no puede ser negativo.")
        self._saldo = nuevo_saldo  # Setter
    
    cuenta = CuentaBancaria(1000)
    print(cuenta.saldo)  
    >> Salida: 1000
    cuenta.saldo = 1500  # Modifica el saldo usando el setter
    print(cuenta.saldo) 
     >> Salida: 1500`
    },
    {
        funcion: "Bucle for",
        descripcion: "El bucle 'for' en Python se utiliza para iterar sobre una secuencia (como una lista, tupla o string). Por cada elemento en la secuencia, el cuerpo del bucle se ejecuta una vez.",
        ejemplo: `# Iterar sobre una lista
        numeros = [1, 2, 3, 4, 5]
        for numero in numeros:
            print(numero)

        >> Salida:
         1
         2
         3
         4
         5`
    },
    {
        funcion: "Bucle for con range()",
        descripcion: "La función `range()` se usa comúnmente con un bucle 'for' para generar una secuencia de números sobre la que iterar.",
        ejemplo: `# Usando range para iterar un número específico de veces
        for i in range(5):
            print(i)

        >> Salida:
         0
         1
         2
         3
         4`
    },
    {
        funcion: "Bucle while",
        descripcion: "El bucle 'while' en Python se ejecuta mientras una condición especificada sea verdadera. Si la condición se vuelve falsa, el bucle termina.",
        ejemplo: `# Usar un bucle while para contar hasta 5
        contador = 1
        while contador <= 5:
            print(contador)
            contador += 1

        >> Salida:
         1
         2
         3
         4
         5`
    },
    {
        funcion: "Bucle while infinito con break",
        descripcion: "Un bucle 'while' puede ser infinito si no se gestiona bien la condición. Usamos 'break' para salir del bucle cuando se cumple una condición específica.",
        ejemplo: `# Bucle while infinito, pero usamos 'break' para detenerlo
        contador = 0
        while True:
            print(contador)
            contador += 1
            if contador >= 5:
                break

        >> Salida:
         0
         1
         2
         3
         4`
    },
    {
        funcion: "Bucle for con else",
        descripcion: "El bucle 'for' en Python puede tener una cláusula 'else'. El bloque 'else' se ejecuta después de que el bucle haya terminado, siempre que no se haya utilizado 'break' para salir del bucle.",
        ejemplo: `# Usar for con else
        for i in range(5):
            print(i)
        else:
            print("El bucle for ha terminado.")

        >> Salida:
         0
         1
         2
         3
         4
        # El bucle for ha terminado.`
    },
    {
        funcion: "Bucle while con else",
        descripcion: "Similar al bucle 'for', los bucles 'while' pueden tener una cláusula 'else', que se ejecuta si la condición del 'while' se vuelve falsa sin haber usado 'break'.",
        ejemplo: `# Usar while con else
    contador = 1
    while contador <= 3:
        print(contador)
        contador += 1
    else:
        print("El bucle while ha terminado.")

    >> Salida:
     1
     2
     3
    # El bucle while ha terminado.`
    }
];


