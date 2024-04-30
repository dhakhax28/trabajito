import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const operaciones = {
    suma: '+',
    resta: '-',
    multiplicacion: '×',
    division: '÷',
    potencia: '^',
    raizCuadrada: '√',
    cubo: 'x³',
    porcentaje: '%',
    inverso: '1/x',
    valorAbsoluto: '|x|',
    factorial: 'x!',
    logaritmo: 'log',
    seno: 'sin',
    coseno: 'cos',
    tangente: 'tan',
    arcoseno: 'asin',
    arcocoseno: 'acos',
    arcotangente: 'atan',
    pi: 'π',
    euler: 'e'
  };

  const realizarOperacion = (operacion) => {
    if (numero1 === '') {
      setResultado('Error: Ingresa un número');
      return;
    }
    let result;
    switch (operacion) {
      case 'suma':
        result = parseFloat(numero1) + parseFloat(numero2);
        break;
      case 'resta':
        result = parseFloat(numero1) - parseFloat(numero2);
        break;
      case 'multiplicacion':
        result = parseFloat(numero1) * parseFloat(numero2);
        break;
      case 'division':
        if (parseFloat(numero2) === 0) {
          result = 'Error: No se puede dividir por cero';
        } else {
          result = parseFloat(numero1) / parseFloat(numero2);
        }
        break;
      case 'potencia':
        result = Math.pow(parseFloat(numero1), parseFloat(numero2));
        break;
      case 'raizCuadrada':
        result = Math.sqrt(parseFloat(numero1));
        break;
      case 'cubo':
        result = Math.pow(parseFloat(numero1), 3);
        break;
      case 'porcentaje':
        result = (parseFloat(numero1) * parseFloat(numero2)) / 100;
        break;
      case 'inverso':
        if (parseFloat(numero1) === 0) {
          result = 'Error: No se puede calcular el inverso de cero';
        } else {
          result = 1 / parseFloat(numero1);
        }
        break;
      case 'valorAbsoluto':
        result = Math.abs(parseFloat(numero1));
        break;
      case 'factorial':
        let fact = 1;
        for (let i = 1; i <= parseFloat(numero1); i++) {
          fact *= i;
        }
        result = fact;
        break;
      case 'logaritmo':
        result = Math.log(parseFloat(numero1));
        break;
      case 'seno':
        result = Math.sin(parseFloat(numero1));
        break;
      case 'coseno':
        result = Math.cos(parseFloat(numero1));
        break;
      case 'tangente':
        result = Math.tan(parseFloat(numero1));
        break;
      case 'arcoseno':
        result = Math.asin(parseFloat(numero1));
        break;
      case 'arcocoseno':
        result = Math.acos(parseFloat(numero1));
        break;
      case 'arcotangente':
        result = Math.atan(parseFloat(numero1));
        break;
      case 'pi':
        result = Math.PI;
        break;
      case 'euler':
        result = Math.E;
        break;
      default:
        result = '';
    }
    setResultado(result.toString());
  }

  const limpiar = () => {
    setNumero1('');
    setNumero2('');
    setResultado('');
  }

  const renderOperaciones = () => {
    return Object.keys(operaciones).map((key) => (
      <TouchableOpacity key={key} style={styles.button} onPress={() => realizarOperacion(key)}>
        <Text style={styles.buttonText}>{operaciones[key]}</Text>
      </TouchableOpacity>
    ));
  }

  const row1 = ['suma', 'resta', 'multiplicacion', 'division'];
  const row2 = ['potencia', 'raizCuadrada', 'cubo', 'porcentaje'];
  const row3 = ['inverso', 'valorAbsoluto', 'factorial', 'logaritmo'];
  const row4 = ['seno', 'coseno', 'tangente', 'arcoseno'];
  const row5 = ['arcocoseno', 'arcotangente', 'pi', 'euler'];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Calculadora</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Número 1'
            keyboardType='numeric'
            value={numero1}
            onChangeText={setNumero1}
          />

          <TextInput
            style={styles.input}
            placeholder='Número 2'
            keyboardType='numeric'
            value={numero2}
            onChangeText={setNumero2}
          />
        </View>

        <View style={styles.buttonRow}>
          {row1.map((operacion) => (
            <TouchableOpacity key={operacion} style={styles.button} onPress={() => realizarOperacion(operacion)}>
              <Text style={styles.buttonText}>{operaciones[operacion]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonRow}>
          {row2.map((operacion) => (
            <TouchableOpacity key={operacion} style={styles.button} onPress={() => realizarOperacion(operacion)}>
              <Text style={styles.buttonText}>{operaciones[operacion]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonRow}>
          {row3.map((operacion) => (
            <TouchableOpacity key={operacion} style={styles.button} onPress={() => realizarOperacion(operacion)}>
              <Text style={styles.buttonText}>{operaciones[operacion]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonRow}>
          {row4.map((operacion) => (
            <TouchableOpacity key={operacion} style={styles.button} onPress={() => realizarOperacion(operacion)}>
              <Text style={styles.buttonText}>{operaciones[operacion]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonRow}>
          {row5.map((operacion) => (
            <TouchableOpacity key={operacion} style={styles.button} onPress={() => realizarOperacion(operacion)}>
              <Text style={styles.buttonText}>{operaciones[operacion]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.clearButton} onPress={limpiar}>
            <Text style={styles.clearButtonText}>Limpiar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.result}>Resultado: {resultado}</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50', // Cambiado a un tono de gris oscuro
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    color: '#fff', // Color de texto cambiado a blanco para contraste
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
  },
  input: {
    width: '45%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff', // Color de fondo del input cambiado a blanco para contraste
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    width: '23%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff', // Color de texto cambiado a blanco para contraste
  },
});
