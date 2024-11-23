const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCEFFC',
    },
    keyboardView: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: '5%',
        justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
    },
    logo: {
        width: 100,
        height: 100,
        aspectRatio: 1,
        marginRight: '2%',
    },
    companyName: {
        fontSize: 65,
        fontWeight: 'bold',
    },
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: '5%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#22668E',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#22668E',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#22668E',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    registerText: {
        fontSize: 14,
        color: '#333',
    },
    registerLink: {
        fontSize: 14,
        color: '#22668E',
        fontWeight: 'bold',
    },
});
export default styles;