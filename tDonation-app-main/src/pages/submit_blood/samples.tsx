/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const Samples = ({data}) => {

  return (
    <View style={styles.container}>
      <View style={styles.fixedHeightSection}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.columnHeader}>SampleID</Text>
              <Text style={styles.columnHeader}>HIV</Text>
              <Text style={styles.columnHeader}>HBsAg</Text>
              <Text style={styles.columnHeader}>Syphillis</Text>
              <Text style={styles.columnHeader}>BGS</Text>
              <Text style={styles.columnHeader}>HCV</Text>
              <Text style={styles.columnHeader}>Other</Text>
            </View>
            {data.map((item: { id: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.Key | null | undefined; HIV: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; HBsAg: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; Syphillis: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; BGS: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; HCV: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; Other: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.sampleId}</Text>
                <Text style={styles.tableCell}>{item.hiv}</Text>
                <Text style={styles.tableCell}>{item.hbsAg}</Text>
                <Text style={styles.tableCell}>{item.syphilis}</Text>
                <Text style={styles.tableCell}>{item.bgs}</Text>
                <Text style={styles.tableCell}>{item.hcv}</Text>
                <Text style={styles.tableCell}>{item.other}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixedHeightSection: {
    height: 200,
    overflow: 'scroll',
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  table: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    padding: 5,
  },
  tableCell: {
    padding: 5,
    width: 120,
    marginTop: 2,
  },
});

export default Samples;











// import React from 'react';
// import {ScrollView, StyleSheet } from 'react-native';
// import { Text } from 'react-native-paper';

// const Samples = ({data}) => {
//   return (
//     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.columnHeader}><Text>SampleID</Text></th>
//             <th style={styles.columnHeader}><Text>HIV</Text></th>
//             <th style={styles.columnHeader}><Text>HBsAg</Text></th>
//             <th style={styles.columnHeader}><Text>Syphillis</Text></th>
//             <th style={styles.columnHeader}><Text>BGS</Text></th>
//             <th style={styles.columnHeader}><Text>HCV</Text></th>
//             <th style={styles.columnHeader}><Text>Other</Text></th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item.id} style={styles.tableRow}>
//               <td style={styles.tableCell}><Text>{item.id}</Text></td>
//               <td style={styles.tableCell}><Text>{item.HIV}</Text></td>
//               <td style={styles.tableCell}><Text>{item.HBsAg}</Text></td>
//               <td style={styles.tableCell}><Text>{item.Syphillis}</Text></td>
//               <td style={styles.tableCell}><Text>{item.BGS}</Text></td>
//               <td style={styles.tableCell}><Text>{item.HCV}</Text></td>
//               <td style={styles.tableCell}><Text>{item.Other}</Text></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   table: {
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     borderCollapse: 'collapse',
//     width: '100%',
//   },
//   tableRow: {
//     borderBottomWidth: 1,
//     borderColor: 'lightgray',
//   },
//   columnHeader: {
//     fontWeight: 'bold',
//     padding: 8,
//     textAlign: 'center',
//   },
//   tableCell: {
//     padding: 8,
//     textAlign: 'center',
//     borderWidth: 1,
//     borderColor: 'lightgray',
//   },
// });

// export default Samples;
























// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';

// const Samples = ({ data }) => {
//   const tableHead = ['SampleID', 'HIV', 'HBsAg', 'Syphillis', 'BGS', 'HCV', 'Other'];
//   const tableData = data.map((item: { id: any; HIV: any; HBsAg: any; Syphillis: any; BGS: any; HCV: any; Other: any; }) => [item.id, item.HIV, item.HBsAg, item.Syphillis, item.BGS, item.HCV, item.Other]);

//   return (
//     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//       <Table borderStyle={styles.table}>
//         <Row data={tableHead} style={styles.head} textStyle={styles.text} />
//         <Rows data={tableData} textStyle={styles.text} />
//       </Table>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   table: { borderWidth: 1, borderColor: '#c8e1ff' },
//   head: { height: 40, backgroundColor: '#f1f8ff' },
//   text: { margin: 6, textAlign: 'center' },
// });

// export default Samples;
