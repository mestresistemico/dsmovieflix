import { StyleSheet, Dimensions } from 'react-native'
import { color } from 'react-native-reanimated';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const colors = {
    white: "#fff",
    lightestGray: "#fefefe",
    lightGray: "#f2f2f2",
    borderGray: "#e1e1e1",
    mediumGray: "#525252",
    darkGray: "#263238",
    black: "#000",
    primary: "#FFC700",
    secondary: "rgba(38, 50, 56, 0.5)",
    bluePill: "#407bff61",
    red: "#df5753",
};

const text = StyleSheet.create({
    bold: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 50,
        color: colors.white,
        lineHeight: 35,
        letterSpacing: -0.015,
    },

    regular: {
        width: 240,
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 50,
        color: colors.white,
        lineHeight: 22,
        letterSpacing: -0.015,
    },

    primaryText: {
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 22,
        textAlign: "center",
        color: colors.black,
        textTransform: "uppercase",
        letterSpacing: -0.015,
        marginLeft: 75,
    },

    productName: {
        fontSize: 16,
        fontWeight: "bold",
    },

    currency: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.mediumGray,
    },

    productPrice: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.primary,
    },

    gobackText: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.darkGray,
        marginLeft: 16,
    },

    productDetailsText: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        color: colors.darkGray,
    },

    productDescription: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.mediumGray,
    },

    loginTitle: {
        fontSize: 30,
        color: colors.white,
        textTransform: "uppercase",
        marginBottom: 70,
    },

    logoutText: {
        color: colors.white,
    },

    addButtonText: {
        color: colors.white,
        textTransform: "uppercase",
        fontWeight: "bold",
    },

    deleteTxt: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: colors.red,
    },

    editTxt: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: colors.mediumGray,
    },

    saveTxt: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: colors.white,
    },

    uploadText: {
        color: colors.black,
        textTransform: "uppercase",
        fontWeight: "bold"
    },

    fileSize: {
        color: colors.primary,
        fontSize: 10,
        fontWeight: "300",
        marginVertical: 5,
        padding: 2,
    },
});

const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.mediumGray,
    },

    card: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-around",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    draw: {
        width: 313,
        height: 225,
        marginBottom: 40,
    },

    textContainer: {
        paddingHorizontal: 20,
    },

    primaryButton: {
        backgroundColor: colors.primary,
        width: 335,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },

    arrowContainer: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    scrollContainer: {
        padding: 10,
    },

    productCard: {
        width: "100%",
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "space-around",
    },

    productImg: {
        width: 140,
        height: 140,
        margin: 16,
    },

    productDescription: {
        width: "100%",
        padding: 20,
        borderTopColor: colors.lightGray,
        borderTopWidth: 1,

    },

    priceContainer: {
        flexDirection: "row",
        marginTop: 10,
    },

    inputContainer: {
        width: "100%",
        height: 60,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 12.5,
        paddingVertical: 10
    },

    searchInput: {
        width: "90%",
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderGray,
    },

    detailsContainer: {
        backgroundColor: colors.white,
        padding: 20,
    },

    gobackContainer: {
        width: 290,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        justifyContent: "flex-start",
    },

    detailCard: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 20,
        justifyContent: "space-around",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 20,
    },

    productImageContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: colors.lightGray,
        alignItems: "center",
        borderRadius: 20,
    },

    productImage: {
        width: 220,
        height: 220,
    },

    scrollTextContainer: {
        marginVertical: 20,
        padding: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.lightGray,
    },

    loginCard: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    form: {
        marginVertical: 10,
    },

    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },

    textInput: {
        width: 335,
        height: 50,
        borderWidth: 1,
        borderColor: colors.borderGray,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.lightestGray
    },

    toggle: {
        margin: -40,

    },

    buttonTextContainer: {

    },

    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },

    deleteBtn: {
        width: "48%",
        height: 40,
        borderWidth: 1,
        borderColor: colors.red,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    editBtn: {
        width: "48%",
        height: 40,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    formContainer: {
        width: deviceWidth,
        padding: 20,
    },

    formCard: {
        width: "100%",
        height: "90%",
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-around",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    modalContainer: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: "#00000033",
        alignItems: "center",
        justifyContent: "center",
    },

    modalContent: {
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50%",
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    modalItem: {
        width: "100%",
        backgroundColor: colors.lightGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },

    formInput: {
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15,
    },

    textArea: {
        width: "100%",
        maxWidth: "100%",
        borderWidth: 1,
        height: 200,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15,
    },

    selectInput: {
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15,
        justifyContent: "center",
    },

    uploadBtn: {
        width: "100%",
        height: 40,
        color: colors.mediumGray,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    cancelBtn: {
        marginLeft: -20,
        width: deviceWidth / 3,
        height: 40,
        borderWidth: 1,
        borderColor: colors.red,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    saveBtn: {
        width: deviceWidth / 3,
        height: 40,
        backgroundColor: colors.primary,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

});

const nav = StyleSheet.create({
    leftText: {
        color: colors.black,
        fontWeight: "bold",
        marginLeft: 10,
    },

    drawer: {
        marginRight: 10
    },

    options: {
        width: deviceWidth,
        height: 120,
        backgroundColor: colors.primary,
        marginTop: 125,
        marginRight: -20,
        padding: 20,
        justifyContent: 'space-between',
        zIndex: 10,
        elevation: 10,
    },

    option: {
        paddingVertical: 5,
    },

    textOption: {
        color: colors.white,
        textTransform: "uppercase",
    },

    textActive: {
        fontWeight: "bold",
    },

    logoutBtn: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
    },
})

const tabbar = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 80,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    pill: {
        padding: 15,
        backgroundColor: colors.lightGray,
        borderRadius: 30,
    },

    pillActive: {
        backgroundColor: colors.bluePill,
    },

    pillText: {
        fontWeight: "bold",
        color: colors.mediumGray,
    },

    pillTextActive: {

    },
})

const admin = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
    },

    addButton: {
        width: deviceWidth - 20,
        height: 50,
        backgroundColor: colors.primary,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
})

export { colors, theme, text, nav, tabbar, admin };