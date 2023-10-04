import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import logo from "../../../../assets/logo.png";

type Props = {
  nome: string;
  nomeFazenda: string;
  descricao: string;
  preco: string;
};

export default function Detalhe({
  nome,
  nomeFazenda,
  descricao,
  preco,
}: Props) {
  return (
    <>
      <Text style={estilos.nome}>{nome}</Text>

      <View style={estilos.fazenda}>
        <Image style={estilos.imagemFazenda} source={logo} />
        <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
      </View>

      <Text style={estilos.descricao}>{descricao}</Text>

      <Text style={estilos.preco}>{preco}</Text>
      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textobotao}>Comprar</Text>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontFamily: "MontserratItalic",
  },
  preco: {
    fontSize: 26,
    fontFamily: "MontserratRegular",
    color: "#2A9F85",
    marginTop: 8,
  },
  botao:{
    marginTop:16,
    backgroundColor:'#2a9f85',
    paddingVertical:16,
    borderRadius:6

  },
  textobotao:{
    textAlign:"center",
    color:"#ffffff",
    lineHeight:26,
    fontFamily:"MontserratBold"
  }
});
