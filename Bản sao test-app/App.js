import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleContinue = () => {
        if (phoneNumber.length === 0) {
            alert('Vui lòng nhập số điện thoại!');
        } else {
            alert(`Số điện thoại của bạn: ${phoneNumber}`);
        }
    };

    return (
        <View style={styles.container}>
            {/* Tiêu đề ở góc trái trên cùng */}
            <Text style={styles.title}>Đăng nhập</Text>
            
            <View style={styles.formContainer}>
                {/* Chỉnh sửa vị trí của "Nhập số điện thoại" */}
                <Text style={styles.subtitle}>Nhập số điện thoại</Text>
                
                {/* Chỉnh sửa vị trí của đoạn mô tả */}
                <Text style={styles.description}>
                    Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nhập số điện thoại của bạn"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />

                <TouchableOpacity
                    style={[styles.button, phoneNumber.length === 0 ? styles.buttonDisabled : {}]}
                    onPress={handleContinue}
                    disabled={phoneNumber.length === 0}
                >
                    <Text style={styles.buttonText}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        position: 'absolute',
        top: 55,
        left: 20,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
        marginTop: -180
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 25,
        paddingHorizontal: 10,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 250, // Tăng khoảng cách giữa TextInput và nút "Tiếp tục"
        fontSize: 16,
    },
    button: {
        height: 50,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
