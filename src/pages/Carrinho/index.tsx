import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Topo from './components/Topo';
import Detalhe from "./components/Detalhe";
import carrinho from "../../mocks/carrinho";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Topo titulo={carrinho.topo.titulo} />
      <View style={estilos.carrinho}>
          <Detalhe
           nome={carrinho.detalhes.nome}
           nomeFazenda={carrinho.detalhes.nomeFazenda}
           descricao={carrinho.detalhes.descricao}
           preco={carrinho.detalhes.preco}
           
           />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "bold",
    padding: 16,
    fontFamily: "MontserratItalic",
  },
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },
  fazenda: {
    flexDirection:"row",
    paddingVertical: 12
  },
  imagemFazenda: {
    width:32,
    height:32
  },
  nomeFazenda:{
    fontSize: 16,
    fontFamily: "MontserratBold",
    lineHeight: 26,
    marginLeft: 12
  },
  descricao: {
    color: "#A3A3A3",
    fontFamily: "MontserratItalic"
  },
  preco: {
    fontSize: 26,
    fontFamily: "MontserratRegular",
    color: "#2A9F85",
    marginTop: 8
  }
});
