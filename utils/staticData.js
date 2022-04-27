const getImgSrc = (fileName) => {
  return require(`/assets/img/${fileName}`)
}

export const homeScenarioList = [
  {
    id: 1,
    title: '监管单位',
    child: [
      {
        id: 3,
        title: '消防大队、中队、支队',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic1.png'),
      },
      {
        id: 4,
        title: '应急单位',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic2.png'),
      },
      {
        id: 5,
        title: '孤寡老人、老旧小区改造',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic3.png'),
      },
    ],
  },
  {
    id: 2,
    title: '联网单位',
    child: [
      {
        id: 6,
        title: '大型建筑、人密场所',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic4.png'),
      },
      {
        id: 7,
        title: '建筑工地',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic5.png'),
      },
      {
        id: 8,
        title: '银行金融行业',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic6.png'),
      },
      {
        id: 9,
        title: '学校',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic7.png'),
      },
      {
        id: 10,
        title: '危化企业、产业园区',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic8.png'),
      },
      {
        id: 11,
        title: '九小场所',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic9.png'),
      },
      {
        id: 12,
        title: '医院',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic10.png'),
      },
      {
        id: 13,
        title: '养老院',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic11.png'),
      },
      {
        id: 14,
        title: '文物古建',
        img: getImgSrc('-s-xzy_gw_sy_yycj_pic12.png'),
      },
    ],
  },
]

export const homeSolutionList = [
  {
    id: 1,
    title: '技术架构体系',
    img: getImgSrc('xzy_gw_sy_jjfa_1.png'),
    des: '平台基于Spring Cloud分布式微服务架构开发，基于K8S进行部署和运维，具有弹性扩展、低延时、低成本、高可靠、高性能、易运维、数据加密等优势，强大的数据处理能力可以更好地对设备数据进行分析和可视化展示。数据库采用了Postgres、Elastic Search等技术，可以满足日均千万级的使用场景。',
  },
  {
    id: 2,
    title: '协议转换体系',
    img: getImgSrc('xzy_gw_sy_jjfa_2.png'),
    des: '平台基于《国标26875协议》研制的一套公共第三方标准协议，包括TCP、UDP、NB（电信、移动等）、MQTT、COAP等，用户可通过自主配置使各种设备自主上架、测试及对接，避免设备厂商与与平台为统一厂商所带来的二次开发的成本。',
  },
  {
    id: 3,
    title: '用户体系',
    img: getImgSrc('xzy_gw_sy_jjfa_3.png'),
    des: '平台用户主要分为集成商管理和厂商管理两类，平台可提供上百家厂商、上千种产品类型予集成商自主选择，减少产品采购环节，降低成本。同时可为厂商提供设备采购集成商管理。',
  },
  {
    id: 4,
    title: '平台开放体系',
    img: getImgSrc('xzy_gw_sy_jjfa_4.png'),
    des: '平台可支持多地址自主选配推送和开放接口方式（HTTP、MQTT等）对接第三方应用平台和物联网平台。',
  },
]

export const footerData = [
  {
    title: '产品中心',
    list: [{ title: '云平台' }, { title: '小程序' }, { title: '硬件终端' }],
  },
  {
    title: '解决方案',
    list: [
      { title: '技术架构体系' },
      { title: '协议转换体系' },
      { title: '用户体系' },
      { title: '平台开放体系' },
    ],
  },
  {
    title: '客户案例',
    list: [{ title: '客户案例' }],
  },
  {
    title: '关于我们',
    list: [{ title: '关于我们' }],
  },
]