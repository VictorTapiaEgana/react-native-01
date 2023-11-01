// import { Text ,StyleSheet} from 'react-native'
// import Theme from './theme'

// const StyleTexts = StyleSheet.create ({
//     text:{
//         color:Theme.colors.textPrimary,
//         fontSize:Theme.fontsizes.body,
//         fontFamily:Theme.fonts.main,
//         fontWeight:Theme.fontWeights.normal
//     },
//     bold:{
//         fontWeight:Theme.fontWeights.bold
//     },
//     subHeading:{
//         fontSize:Theme.fontsizes.subHeading
//     },
//     colorPrimary:{
//         color:Theme.colors.textPrimary
//     },
//     colorSecondary:{
//         color:Theme.colors.textSecodary
//     },
//     Align:{
//         textAlign:'center'
//     }
    
// })

// export default function StyleText({ children, color, align, fontSize ,fontWeight, style, ...restOfProps}){
   
//     const textstile=[
//                     StyleTexts.text,
//                     color === 'primary' && StyleTexts.colorPrimary,
//                     color === 'secondary' && StyleTexts.colorSecondary,
//                     fontSize === 'subHeading' &&  StyleTexts.subHeading,
//                     fontWeight === 'bold' && StyleTexts.bold,
//                     align === 'center' && StyleTexts.Align
//     ]

//     return(
//         <Text style={textstile} {...restOfProps}>
//             {children}
//         </Text>
//     )
// }