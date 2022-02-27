import { StyleSheet } from "react-native";

const useStyles = () => {

    let blue =  '#0e1d29';
    let white = '#fff';
    let transparent = 'transparent';

    const styles = StyleSheet.create({
        html: {
            flex: 2,
            justifyContent: "space-between",
            backgroundColor: blue,
            height: "100%",
        },
        scrollHtml: {
            backgroundColor: blue,
            height: "91%",
            paddingHorizontal: 10,
            width: "100%",
        },
        menu: {
            width: 40,
            height: 40,
        },
        body: {
            backgroundColor: blue,
            height: "91%",
            padding: 10,
            width: "100%",
        },
        widgetStyle: {
            backgroundColor: transparent,
        },
        widget: {
            flex: 0,
            height: '35%',
            backgroundColor: transparent,
        },
        calculatorWidget: {
            marginTop: 30,
            flex: 0,
            height: '90%',
            backgroundColor: transparent,
        },
        newsView: {
            height: "65%",
        },
        newsObjects: {
            backgroundColor: white,
            borderRadius: 5,
            padding: 15,
            marginVertical: 10,
        },
        newsTitle: {
            color: '#1cb7de',
            fontSize: 12,
            fontWeight: 'bold',
        },
        newsDesc: {
            color: '#a1a1a1',
        },
        createUserView: {
            marginTop: 60,
        },
        footer: {
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: '#191e22',
            padding: 20,
            paddingTop: 10,
            width: "100%",
            height: "11%",
        },
        tabs: {
            width: 35,
            height: 35,
        },
        icons: {
            width: 55,
            height: 55,
        },
        emailIcon: {
            width: 55,
            height: 40,
        },
        loading: {
            color: white,
            textAlign: 'center',
            marginTop: 40,
        },
        error: {
            color: 'red',
            textAlign: 'center',
            marginTop: 40,
            fontSize: 15,
            fontWeight: "bold",
        },
        textInput: {
            width: '80%',
            height: 35,
            color: '#1cb7de',
            fontWeight: "bold",
            backgroundColor: white,
            padding: 10,
            borderRadius: 5,
        },
        button: {
            textAlign: 'center',
            padding: 10,
            width: '100%',       
            color: white,
            fontWeight: 'bold',
        },
        buttonView: {
            borderRadius: 8,
            backgroundColor: '#1cb7de',
            marginTop: 40, 
        },
        textColor: {
            color: white,
        },
        errorTextColor: {
            color: 'red',
            marginTop: 20,
        },
        homeHeader: {
            textAlign: 'center',
            fontSize: 25,
            color: white,
            fontWeight: "bold",
        },
        h1: {
            fontSize: 25,
            color: white,
            fontWeight: "bold",
        },
        h2: {
            fontSize: 20,
            color: white,
            fontWeight: "bold",
            padding: 10,
        },
        h3: {
            fontSize: 15,
            color: white,
            fontWeight: "bold",
            textAlign: 'center',
            marginTop: 60,
        },
        centerElement: {
            flex: 1,
            justifyContent: 'center',
        },
        flexRow: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
            height: 80,
            backgroundColor: white,
            borderRadius: 5,
        },
    })

    return { styles }
}
 
export default useStyles;