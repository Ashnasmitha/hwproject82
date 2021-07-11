import * as React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';


export default class PostCard extends React.Component{
    render(){
      return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>
                        <Image
                            source={require('../assets/profile_img.png')}
                            style={styles.profileImage}
                        ></Image>
                    </View>
                    <View style={styles.authorNameContainer}>
                        <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                    </View>
                </View>
                <Image source={require('../assets/post.jpeg')} style={styles.postImage}/>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={'heart'} size={RFValue(30)} color={'white'}/>
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                </View>
            </View>
       
        </View>
      )
    }
    }

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    cardContainer:{
        backgroundColor:'#2a2a2a',
        borderRadius: RFValue(18),
        padding:RFValue(18),
        margin:RFValue(12)
    },
    authorContainer:{
        flexDirection:'row',
        flex:0.1
    },
    authorImageContainer:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    profileImage:{
        borderRadius:RFValue(80),
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    authorNameContainer:{
        flex: 0.85,
        justifyContent: "center"
    },
    authorNameText:{
        color: "white",
        fontSize: RFValue(20)
    },
    postImage:{
        marginTop: RFValue(20),
        resizeMode: "contain",
        width: "100%",
        alignSelf: "center",
        height: RFValue(275)
    },
    captionContainer:{
        justifyContent: "center",
        alignItems: "center"
    },
    captionText:{
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
    actionContainer:{
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton:{
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3945",
        borderRadius: RFValue(30)
    },
    likeText:{
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
})
