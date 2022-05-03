import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { COLORS } from '../../themes/colors';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { styles } from './styles';

const BottomSheetItems:React.FC = () => {
    const DATA = [
        {
            title:'Doces',
            data:['Bolo','Pudim']
        },
        {
            title:'Sabores',
            data:['Chocolate','Morango','Maracujá']
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Ordenar por:
            </Text>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => index+item }
                renderSectionHeader={({ section }) => (
                    <>
                        <Text style={styles.labels}>{section.title}</Text>
                        <FlatList
                            horizontal
                            data={section.data}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <Badge title={item}/>
            
                            }
                        />
                    </>
                )}
                renderItem={({ item, section }) => {
                    return null;
                  }}
            />
            <View style={styles.footer}>
                <Button 
                    title='Filtrar' 
                    size={36} 
                    background={COLORS.primary}
                />
            </View>
        </View>
    )
}

export { BottomSheetItems };