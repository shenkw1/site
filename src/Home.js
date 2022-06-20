import { Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <div className="home">
            <h1>
                <Text style={{color: '#F1F1F1'}}>
                    hello, i'm 
                    <Text style={{color: '#D2E4C4'}}>
                        kat
                    </Text>
                    .
                </Text>
            </h1>

            <p>i’m a computer science major studying at georgia tech with a passion for ui/ux, product design, data science, and more.</p>
            <p>download my resume <a href='./resume.pdf' download>here</a></p>
        </div>
    );
}
 
export default Home;