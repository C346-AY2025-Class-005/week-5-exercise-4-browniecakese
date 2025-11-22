import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity, Linking } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const datasource = [
  {data:[
    {key: "Striped Long Sleeve", size:"M", pic: require('./public/images/long-sleeve.png'), url:"https://item.taobao.com/item.htm?id=897720342593&mi_id=00006nAM7t4R-5BnV62yFXk9g9M9P4WuwHRff_j9J1znFHk&pvid=402d5a6b-45bf-49c6-97d8-04e9e213fbde&scm=1007.55993.466417.0&spm=tbpc.mytb_index.repurchaseitem.d8.2bfd782dt5aXMK&xxc=home_recommend&sku_properties=20509%3A28314"},
    {key: "Purple Off The Shoulder", size:"Free", pic: require('./public/images/off-shoulder.png'), url:"https://item.taobao.com/item.htm?from=cart&id=928591542098&mi_id=0000gnM5361CyFPBsKeGNsI3eXWXLbJ0qtVnnAi2ZK-50VQ&singleUseCache=true&skuId=5978381138642&spm=a1z0d.6639537%2F202410.item.d928591542098.36767484op4Mv9&upStreamPrice=7740"}
  ], title: "Shirts", bgcolor:"#FFE4E1", icon:"shirt"},

  {data:[
    {key:"Brown Sweatpants", size:"L", pic: require('./public/images/brown-pants.png'), url:"https://item.taobao.com/item.htm?id=991657100903&mi_id=00004sCcol2GiWNaakdnCjKgoMyxFLXld4d5KV5mvhHmU1A&pvid=402d5a6b-45bf-49c6-97d8-04e9e213fbde&scm=1007.55993.466417.0&skuId=6125407519947&spm=tbpc.mytb_index.repurchaseitem.d3.2bfd782dt5aXMK&xxc=home_recommend"},
    {key:"Blue Striped pants", size:"L", pic: require('./public/images/blue-pants.png'), url:"https://item.taobao.com/item.htm?id=958102183797&mi_id=0000X7I-yoZG-PAQdYGPB1WzwKCIutrF1eoDLgle4FWer6Q&spm=tbpc.mytb_itemcollect.item.goods&upStreamPrice=13000&sku_properties=1627207%3A28341"}
  ], title: "Pants", bgcolor:"#E0F7FA", icon:"person"},

  {data:[
    {key:"Asics - Brown shoes", size:"39", pic: require('./public/images/brown-shoes.png'), url:"https://detail.tmall.com/item.htm?abbucket=17&id=964598901236&mi_id=00000F2mX8x3ot6lxsqN2l7tDEQiAwAJtxbOxINgh5_L48o&ns=1&priceTId=210149d917635372813804069e08a8&skuId=6070667223910&spm=a21n57.1.hoverItem.37&utparam=%7B%22aplus_abtest%22%3A%22c4e3f8b39224fe15f284238a29fdfc1d%22%7D&xxc=taobaoSearch"},
    {key:"Nike - Airforce 1", size:"40", pic: require('./public/images/black-shoes.png'), url:"https://detail.tmall.com/item.htm?abbucket=17&id=753863888217&mi_id=0000ZWXKZHteejFI2ktSlyWz8EyQLCqFBiRe99U8Wh5SP9Q&ns=1&priceTId=2101283717635376280032607e090c&skuId=5933336708849&spm=a21n57.1.hoverItem.9&utparam=%7B%22aplus_abtest%22%3A%22e41f969f2722b20be18c3106431241e7%22%7D&xxc=taobaoSearch"}
  ], title: "Shoes", bgcolor:"#F0E68C", icon:"shoe-prints"},

  {data:[
    {key:"Camo Hat", size:"Free", pic: require('./public/images/camo-hat.png'), url:"https://item.taobao.com/item.htm?from=cart&id=891927394088&mi_id=0000CeSwpuxgokvT9srTAuwp9K6A8HB9DKrcOI7imuNLCPA&skuId=5907523303599&spm=a1z0d.6639537%2F202410.item.d891927394088.36767484op4Mv9&upStreamPrice=2270"},
    {key:"Beanie Cap",  size:"Free", pic: require('./public/images/beanie-hat.png'), url:"https://item.taobao.com/item.htm?id=988851510538&mi_id=0000dvwdKwAfZBNe0cwIX15wFVC87atfmfRQEw4Kad0cVCw&pvid=e0fed7ed-ee71-4d74-a1f0-4c644c193db7&scm=1007.40986.467924.0&skuId=5955153536299&spm=a21bo.jianhua%2Fa.201876.d124.25012a89IpEZf8&utparam=%7B%22item_ctr%22%3A0.035633333027362823%2C%22x_object_type%22%3A%22item%22%2C%22matchType%22%3A%22nann_base%22%2C%22item_price%22%3A%2235.64%22%2C%22item_cvr%22%3A0.00131472188513726%2C%22umpCalled%22%3Atrue%2C%22pc_scene%22%3A%2220001%22%2C%22userId%22%3A2215416904943%2C%22ab_info%22%3A%2230986%23467924%230_30986%23528214%2358507_30986%23527788%2358418_30986%23528109%2358485_30986%23521582%2357267_30986%23526091%2358189_30986%23528936%2357910_30986%23533298%2359487_30986%23530923%2359037_30986%23530767%2359017%22%2C%22tpp_buckets%22%3A%2230986%23467924%230_30986%23528214%2358507_30986%23527788%2358418_30986%23528109%2358485_30986%23521582%2357267_30986%23526091%2358189_30986%23528936%2357910_30986%23533298%2359487_30986%23530923%2359037_30986%23530767%2359017%22%2C%22aplus_abtest%22%3A%2274de78e74c3bed9306c0259a46c0b961%22%2C%22isLogin%22%3Atrue%2C%22abid%22%3A%22528214_527788_528109_521582_526091_528936_533298_530923_530767%22%2C%22pc_pvid%22%3A%22e0fed7ed-ee71-4d74-a1f0-4c644c193db7%22%2C%22isWeekLogin%22%3Afalse%2C%22rn%22%3A23%2C%22item_ecpm%22%3A0%2C%22ump_price%22%3A%2235.64%22%2C%22isXClose%22%3Afalse%2C%22x_object_id%22%3A988851510538%7D&xxc=home_recommend"}
  ], title: "Accessories", bgcolor:"#E6E6FA", icon:"star"},
];

const renderItem = ({item}) => {
  const handlePress = () => {
    Linking.openURL(item.url);
  }
  
  return(
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{item.key}</Text>
        <Text style={styles.sizeStyle}>Size: {item.size}</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Image source={item.pic} resizeMode="contain" style={styles.imageStyle}/>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>My Wishlist</Text>
      <SectionList 
        sections={datasource} 
        renderItem={renderItem} 
        renderSectionHeader={({section:{title, bgcolor, icon}}) => (
          <View style={[styles.headerContainer, {backgroundColor:bgcolor}]}>
            <FontAwesome6 name={icon} size={20} color="black" style={styles.iconStyle}/>
            <Text style={styles.headertext}>{title}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 50,
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  itemContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 1,
  },

  textContainer: {
    flex: 1,
    marginRight: 10,
  },

  titleStyle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },

  sizeStyle: {
    fontSize: 14,
    color: '#666',
  },

  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 8,
  },

  iconStyle: {
    marginRight: 8,
  },

  headertext: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
});