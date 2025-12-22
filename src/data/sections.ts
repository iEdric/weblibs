export type Link = {
  name: string
  url: string
  desc?: string
  group?: string
}

export type LinkSection = {
  id: string
  title: string
  subtitle?: string
  accent: string
  links: Link[]
}

export const sections: LinkSection[] = [
  // 1. 文献 / 期刊 / 检索
  {
    id: 'papers',
    title: '文献 · 期刊 · 检索',
    subtitle: '从选题调研到投稿，全流程的文献与期刊入口',
    accent: '#4f46e5',
    links: [
      {
        name: 'Google Scholar',
        url: 'https://scholar.google.com',
        desc: '全球范围的学术论文与引用检索',
        group: '文献检索'
      },
      {
        name: '百度学术',
        url: 'https://xueshu.baidu.com',
        desc: '中文文献与期刊论文搜索',
        group: '文献检索'
      },
      {
        name: '中国知网 CNKI',
        url: 'https://scholar.cnki.net',
        desc: '中文核心期刊、硕博论文与会议论文',
        group: '文献检索'
      },
      {
        name: 'Semantic Scholar',
        url: 'https://www.semanticscholar.org/',
        desc: '基于语义的学术搜索与推荐',
        group: '文献检索'
      },
      {
        name: 'arXiv',
        url: 'https://arxiv.org/',
        desc: '物理、数学等领域预印本论文',
        group: '文献检索'
      },
      {
        name: 'NASA技术报告',
        url: 'http://lsda.jsc.nasa.gov/',
        desc: 'NASA技术报告与文献资源',
        group: '文献检索'
      },
      {
        name: '开源期刊',
        url: 'http://www.oalib.com/',
        desc: '开放获取学术期刊平台',
        group: '文献检索'
      },
      {
        name: 'Analytical Chemistry',
        url: 'https://pubs.acs.org/journal/ancham',
        desc: '分析化学顶刊',
        group: '核心期刊'
      },
      {
        name: 'Applied Spectroscopy',
        url: 'https://journals.sagepub.com/home/asp',
        desc: '应用光谱学期刊',
        group: '核心期刊'
      },
      {
        name: 'Applied Spectroscopy Reviews',
        url: 'https://www.tandfonline.com/journals/laps20',
        desc: '应用光谱学综述期刊',
        group: '核心期刊'
      },
      {
        name: 'Spectrochimica Acta Part B',
        url: 'https://www.journals.elsevier.com/spectrochimica-acta-part-b-atomic-spectroscopy',
        desc: '光谱化学学报 B 辑',
        group: '核心期刊'
      },
      {
        name: 'Atomic Spectroscopy',
        url: 'http://www.at-spectrosc.com/',
        desc: '原子光谱学期刊',
        group: '核心期刊'
      },
      {
        name: 'Journal of Applied Physics',
        url: 'https://aip.scitation.org/journal/jap',
        desc: '应用物理',
        group: '核心期刊'
      },
      {
        name: 'Journal of Analytical Atomic Spectrometry',
        url: 'https://pubs.rsc.org/en/journals/journal/ja',
        desc: '分析原子光谱学期刊',
        group: '核心期刊'
      },
      {
        name: 'Analytical and Bioanalytical Chemistry',
        url: 'https://www.springer.com/journal/216',
        desc: '分析与生物分析化学',
        group: '核心期刊'
      },
      {
        name: 'Applied Physics B',
        url: 'https://www.springer.com/journal/340',
        desc: '激光与光学方向期刊',
        group: '核心期刊'
      },
      {
        name: 'Optics Express',
        url: 'https://opg.optica.org/oe/home.cfm',
        desc: '开放获取光学期刊',
        group: '核心期刊'
      },
      {
        name: 'Talanta',
        url: 'https://www.journals.elsevier.com/talanta',
        desc: '分析化学期刊',
        group: '核心期刊'
      },
      {
        name: 'Optics Letters',
        url: 'https://opg.optica.org/ol/home.cfm',
        desc: '短文形式的光学快报',
        group: '核心期刊'
      },
      {
        name: 'Spectroscopy Online',
        url: 'https://www.spectroscopyonline.com/',
        desc: '在线光谱学资源',
        group: '核心期刊'
      },
      {
        name: '光谱学与光谱分析',
        url: 'https://www.gpxygpfx.com/',
        desc: '国内光谱学核心期刊',
        group: '核心期刊'
      },
      {
        name: '分析化学（中文）',
        url: 'http://www.analyticchem.cn/',
        desc: '国内分析化学核心期刊',
        group: '核心期刊'
      },
      {
        name: '中国光学期刊网',
        url: 'https://www.opticsjournal.net/',
        desc: '光学类期刊综合平台',
        group: '核心期刊'
      },
      {
        name: 'SCI 检索',
        url: 'http://isiknowledge.com/wos',
        desc: 'SCI 论文检索平台',
        group: '收录检索'
      },
      {
        name: 'EI 检索',
        url: 'https://www.engineeringvillage.com/',
        desc: '工程索引（EI）检索入口',
        group: '收录检索'
      },
      {
        name: 'CPCI-S 检索',
        url: 'http://isiknowledge.com/wos',
        desc: '会议论文 CPCI-S 检索入口',
        group: '收录检索'
      },
      {
        name: 'CSCD 检索',
        url: 'http://sciencechina.cn/cscd_source.jsp',
        desc: '中国科学引文数据库来源期刊检索',
        group: '收录检索'
      },
      {
        name: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/',
        desc: '生命科学与医学文献检索',
        group: '收录检索'
      },
      {
        name: '中国专利',
        url: 'https://www.cnipa.gov.cn/',
        desc: '国家知识产权局专利查询平台',
        group: '专利检索'
      },
      {
        name: '谷歌专利',
        url: 'https://www.google.com.hk/?tbm=pts',
        desc: 'Google专利搜索与查询',
        group: '专利检索'
      },
      {
        name: '欧洲专利',
        url: 'http://www.epo.org/',
        desc: '欧洲专利局官方网站',
        group: '专利检索'
      },
      {
        name: '美国专利',
        url: 'https://www.uspto.gov/',
        desc: '美国专利商标局官方网站',
        group: '专利检索'
      },
      {
        name: '专利在线',
        url: 'http://www.freepatentsonline.com/',
        desc: '免费专利全文下载平台',
        group: '专利检索'
      },
      {
        name: '各国专利',
        url: 'http://www.delphion.com/',
        desc: '世界各国专利数据库查询',
        group: '专利检索'
      },
      {
        name: '加拿大专利',
        url: 'http://www.ic.gc.ca/opic-cipo/cpd/eng/search/basic.html?wt_src=cipo-patent-main&wt_cxt=toptask',
        desc: '加拿大知识产权局专利搜索',
        group: '专利检索'
      },
      {
        name: '澳洲专利',
        url: 'https://www.ipaustralia.gov.au/',
        desc: '澳大利亚知识产权局专利平台',
        group: '专利检索'
      },
      {
        name: '日本专利',
        url: 'http://www.jpo.go.jp/',
        desc: '日本特许厅专利局',
        group: '专利检索'
      },
      {
        name: '韩国专利',
        url: 'http://eng.kipris.or.kr/enghome/main.jsp',
        desc: '韩国知识产权局专利检索',
        group: '专利检索'
      },
      {
        name: '印度专利',
        url: 'http://www.indianpatents.org.in/',
        desc: '印度专利数据库',
        group: '专利检索'
      },
      {
        name: '香港专利',
        url: 'http://ipsearch.ipd.gov.hk/',
        desc: '香港知识产权署专利搜索',
        group: '专利检索'
      },
      {
        name: '专利下载',
        url: 'http://www.drugfuture.com/cnpat/cn_patent.asp',
        desc: '中国专利免费下载平台',
        group: '专利检索'
      }
    ]
  },

  // 2. 数据库 / 谱线 / 基础数据
  {
    id: 'db',
    title: '数据库 · 谱线 · 基础数据',
    subtitle: '定标、反演与机理分析所需的核心数据源',
    accent: '#22c55e',
    links: [
      {
        name: 'NIST Spectra 总入口',
        url: 'https://physics.nist.gov',
        desc: 'NIST 光谱与物理常数主站',
        group: 'NIST 相关'
      },
      {
        name: 'NIST 谱线参数数据库',
        url: 'https://physics.nist.gov/PhysRefData/Handbook/periodictable.htm',
        desc: '常用元素的谱线参数数据',
        group: 'NIST 相关'
      },
      {
        name: 'NIST 配分函数数据库',
        url: 'https://physics.nist.gov/PhysRefData/DFTdata/',
        desc: '等离子体状态下的配分函数与相关数据',
        group: 'NIST 相关'
      },
      {
        name: 'NIST 展宽系数数据库',
        url: 'https://physics.nist.gov/PhysRefData/',
        desc: 'Stark 等谱线展宽相关参数数据',
        group: 'NIST 相关'
      },
      {
        name: 'CFA 谱线库',
        url: 'https://www.cfa.harvard.edu/',
        desc: '天体物理与光谱线相关数据库',
        group: '谱线与等离子体数据库'
      },
      {
        name: 'Atomic Line List',
        url: 'http://www.pa.uky.edu/~peter/newpage/',
        desc: '原子线表数据查询',
        group: '谱线与等离子体数据库'
      },
      {
        name: 'Plasma 数据库集',
        url: 'http://www.adas.ac.uk/',
        desc: '等离子体过程与谱线模型数据库合集',
        group: '谱线与等离子体数据库'
      },
      {
        name: 'Stark 展宽系数数据库',
        url: 'http://stark-b.csic.es/',
        desc: 'Stark 宽化参数数据库',
        group: '谱线与等离子体数据库'
      },
      {
        name: '化学专业数据库',
        url: 'https://pubchem.ncbi.nlm.nih.gov/',
        desc: '化合物与分子性质数据库',
        group: '化学与材料'
      },
      {
        name: '原子分子数据库',
        url: 'https://physics.nist.gov/PhysRefData/',
        desc: '原子分子能级与跃迁数据',
        group: '化学与材料'
      },
      {
        name: 'ChemCam 相关数据',
        url: 'https://mars.nasa.gov/msl/mission/instruments/spectrometers/chemcam/',
        desc: '火星 ChemCam LIBS 相关数据与资料',
        group: '化学与材料'
      },
      {
        name: '金属百科',
        url: 'https://www.azom.com/',
        desc: '金属材料与成分数据',
        group: '化学与材料'
      },
      {
        name: '元素性质表（RSC）',
        url: 'https://www.rsc.org/periodic-table',
        desc: '元素性质一览，适合作为 LIBS 参考',
        group: '元素与周期表'
      },
      {
        name: 'Periodic Table（交互版）',
        url: 'https://ptable.com/',
        desc: '交互式元素周期表',
        group: '元素与周期表'
      },
      {
        name: 'NIST Chemistry WebBook',
        url: 'https://webbook.nist.gov/chemistry/',
        desc: '气体相光谱、热力学等物性数据库',
        group: '化学与材料'
      },
      {
        name: 'HITRAN',
        url: 'https://hitran.org/',
        desc: '高分辨率分子光谱数据库',
        group: '谱线与等离子体数据库'
      },
      {
        name: 'NIST标准物质',
        url: 'https://www-s.nist.gov/srmors/index.cfm',
        desc: 'NIST标准参考材料与标样',
        group: '耗材标样'
      },
      {
        name: '国际标物',
        url: 'http://www.brammerstandard.com/',
        desc: 'Brammer标准物质国际供应商',
        group: '耗材标样'
      },
      {
        name: '国家标物',
        url: 'http://www.bzwzw.com/index.php',
        desc: '国家标准物质网',
        group: '耗材标样'
      },
      {
        name: '中国标物',
        url: 'http://www.gbw114.com/index.html',
        desc: '中国标准物质网',
        group: '耗材标样'
      },
      {
        name: '坛磨质检标物',
        url: 'http://www.gbw-china.com/',
        desc: '坛墨质检标准物质中心',
        group: '耗材标样'
      },
      {
        name: '钢研纳克标物',
        url: 'http://www.ncscrm.com/',
        desc: '钢研纳克标准物质网',
        group: '耗材标样'
      },
      {
        name: '标物共享平台',
        url: 'http://www.ncrm.org.cn/',
        desc: '国家标准物质资源共享平台',
        group: '耗材标样'
      },
      {
        name: '中华标物',
        url: 'http://www.gbw365.com/',
        desc: '中华标准物质网',
        group: '耗材标样'
      },
      {
        name: '北京标物',
        url: 'http://www.biaowu.com/',
        desc: '北京标准物质网',
        group: '耗材标样'
      },
      {
        name: '华南标物',
        url: 'http://www.gdgbw.com/',
        desc: '华南标准物质网',
        group: '耗材标样'
      },
      {
        name: '国家标准物质中心',
        url: 'http://www.114gbw.com/',
        desc: '国家标准物质中心',
        group: '耗材标样'
      },
      {
        name: '卓立汉光',
        url: 'http://www.zolix.com.cn/prod3con_371_401.html',
        desc: '卓立汉光光学元件与耗材',
        group: '耗材标样'
      },
      {
        name: '昊量光电',
        url: 'http://www.auniontech.com',
        desc: '昊量光电光学仪器与耗材',
        group: '耗材标样'
      },
      {
        name: 'Laser-export',
        url: 'http://www.laser-export.com/prod/ser.html',
        desc: '激光产品与光学耗材出口商',
        group: '耗材标样'
      },
      {
        name: '优光科技',
        url: 'http://www.u-optic.com',
        desc: '武汉优光科技光学元件',
        group: '耗材标样'
      },
      {
        name: '仪器信息网',
        url: 'http://www.instrument.com.cn/',
        desc: '仪器信息与耗材综合平台',
        group: '耗材标样'
      },
      {
        name: '化学城',
        url: 'http://www.chemtown.cn/',
        desc: '化学试剂与耗材采购平台',
        group: '耗材标样'
      }
    ]
  },

  // 3. 社区 / 团队 / 会议 / 组织
  {
    id: 'community',
    title: '社区 · 团队 · 会议 · 组织',
    subtitle: '找到人、组织与活动，让 LIBS 不再是一个人的战斗',
    accent: '#f97316',
    links: [
      { name: '小木虫', url: 'https://muchong.com', desc: '科研学术交流社区', group: '社区论坛' },
      { name: '分析测试百科网', url: 'https://www.antpedia.com', desc: '分析测试资讯与论坛', group: '社区论坛' },
      { name: '丁香园', url: 'https://www.dxy.cn', desc: '生命科学与医学相关社区', group: '社区论坛' },
      { name: 'ResearchGate', url: 'https://www.researchgate.net/', desc: '科研社交与论文分享平台', group: '社区论坛' },
      { name: 'Academia.edu', url: 'https://www.academia.edu/', desc: '学术论文与个人主页平台', group: '社区论坛' },
      { name: 'HUST', url: 'https://www.hust.edu.cn/', desc: '华中科技大学相关 LIBS 团队', group: '科研团队' },
      { name: 'WNLO', url: 'http://wnlo.hust.edu.cn/', desc: '武汉国家光电研究中心', group: '科研团队' },
      { name: 'Purdue University', url: 'https://www.purdue.edu/', desc: '普渡大学，光谱与激光方向研究', group: '科研团队' },
      { name: 'University of Central Florida', url: 'https://www.ucf.edu/', desc: '中佛罗里达大学，CREOL 等光学研究机构', group: '科研团队' },
      { name: 'INRS', url: 'https://inrs.ca/', desc: '加拿大国立科学研究院', group: '科研团队' },
      { name: 'University of Nebraska–Lincoln', url: 'https://www.unl.edu/', desc: '内布拉斯加大学林肯分校', group: '科研团队' },
      { name: 'Université Lyon 1', url: 'https://www.univ-lyon1.fr/', desc: '里昂第一大学，光谱与等离子体相关方向', group: '科研团队' },
      { name: '中国光学工程学会', url: 'http://www.cncos.org/', desc: '国内光学工程领域学会', group: '学会与组织' },
      { name: '美国光学学会（OSA / Optica）', url: 'https://www.optica.org/', desc: '光学权威学会', group: '学会与组织' },
      { name: '美国物理学会（APS）', url: 'https://www.aps.org/', desc: '美国物理学会', group: '学会与组织' },
      { name: '英国物理学会（IOP）', url: 'https://www.iop.org/', desc: '英国物理学会', group: '学会与组织' },
      { name: '中国光学学会', url: 'http://www.cncos.org/', desc: '国内光学领域学术组织', group: '学会与组织' },
      { name: '美国光学工程学会（SPIE）', url: 'https://spie.org/', desc: '光学工程与光子学学会', group: '学会与组织' },
      { name: '美国激光学会（LIA）', url: 'https://www.lia.org/', desc: '激光安全与应用相关学会', group: '学会与组织' },
      { name: 'SCIX', url: 'https://www.scixconference.org/', desc: '国际光谱与分析化学会议', group: '会议与活动' },
      { name: '中国学术会议在线', url: 'http://www.meeting.edu.cn/', desc: '国内学术会议汇总平台', group: '会议与活动' },
      { name: '光谱网', url: 'http://www.sinospectroscopy.org.cn/default.php', desc: '中国光谱界专家学者交流平台', group: '社区论坛' },
      { name: '博研论坛', url: 'http://bbs.myboyan.com/', desc: '学术门户站论坛', group: '社区论坛' },
      { name: '科研速递', url: 'http://www.expaper.cn/', desc: '科研信息与论文速递平台', group: '社区论坛' },
      { name: '科研动力', url: 'https://www.howsci.com/', desc: '科研方法与动力平台', group: '社区论坛' },
      { name: '光行天下', url: 'http://www.opticsky.cn/', desc: '光学技术交流平台', group: '社区论坛' },
      { name: '芋头网', url: 'http://yutou.org/forum.php', desc: '学术交流与资源分享论坛', group: '社区论坛' }
    ]
  },

  // 4. 工具 / 仪器 / 项目 / 职业
  {
    id: 'career',
    title: '工具 · 仪器 · 项目 · 职业',
    subtitle: '从实验搭建到写作投稿，再到项目与职业发展',
    accent: '#06b6d4',
    links: [
      { name: 'Applied Photonics', url: 'https://www.appliedphotonics.co.uk/', desc: 'LIBS 仪器厂商', group: '仪器厂商' },
      { name: 'Applied Spectra', url: 'https://appliedspectra.com/', desc: 'LIBS/LA-ICP-MS 仪器厂商', group: '仪器厂商' },
      { name: 'Hitachi', url: 'https://www.hitachi-hightech.com/', desc: '日立，高端分析仪器厂商', group: '仪器厂商' },
      { name: 'SciAps', url: 'https://www.sciaps.com/', desc: '手持式 LIBS 与 XRF 仪器', group: '仪器厂商' },
      { name: 'Avantes', url: 'https://www.avantes.com/', desc: '光谱仪和光纤解决方案', group: '仪器厂商' },
      { name: 'B&W Tek', url: 'https://bwtek.com/', desc: '便携式光谱仪与拉曼系统', group: '仪器厂商' },
      { name: 'Ocean Optics', url: 'https://www.oceaninsight.com/', desc: '海洋光学，光谱仪核心厂商', group: '仪器厂商' },
      { name: 'P&P Optica', url: 'https://www.ppa.ca/', desc: '光学仪器与解决方案', group: '仪器厂商' },
      { name: 'Photon Etc', url: 'https://www.photonetc.com/', desc: '光子学与成像解决方案', group: '仪器厂商' },
      { name: 'Photonic Solutions', url: 'https://www.photonicsolutions.co.uk/', desc: '激光与光学解决方案', group: '仪器厂商' },
      { name: 'Princeton Instruments', url: 'https://www.princetoninstruments.com/', desc: '高性能探测器与光谱设备', group: '仪器厂商' },
      { name: 'Rap.ID', url: 'https://www.rap-id.com/', desc: '快速鉴别检测仪器', group: '仪器厂商' },
      { name: 'SECOPTA GmbH', url: 'https://www.secopta.com/', desc: '德国 LIBS 工业在线分析仪器', group: '仪器厂商' },
      { name: 'StellarNet', url: 'https://www.stellarnet.us/', desc: '紧凑型光谱仪厂商', group: '仪器厂商' },
      { name: 'TSI', url: 'https://www.tsi.com/', desc: '颗粒/流体/气溶胶测量仪器', group: '仪器厂商' },
      { name: 'CNI Laser', url: 'https://www.cnilaser.com/', desc: '长春新产业激光，LIBS 光源设备', group: '仪器厂商' },
      { name: 'RIGAKU', url: 'https://www.rigaku.com/', desc: '理学，材料分析仪器厂商', group: '仪器厂商' },
      { name: 'HORIBA Scientific', url: 'https://www.horiba.com/scientific/', desc: '光谱与分析仪器厂商', group: '仪器厂商' },
      { name: 'Hamamatsu Photonics', url: 'https://www.hamamatsu.com/', desc: '光电探测器与光源厂商', group: '仪器厂商' },
      { name: 'Thorlabs', url: 'https://www.thorlabs.com/', desc: '光学元件与光机械平台', group: '仪器厂商' },
      { name: '谷歌翻译', url: 'https://translate.google.com/', desc: '多语言机器翻译', group: '翻译与写作' },
      { name: 'CNKI 翻译', url: 'https://dict.cnki.net/', desc: '面向学术场景的翻译工具', group: '翻译与写作' },
      { name: '百度词典', url: 'https://dict.baidu.com/', desc: '通用词典工具', group: '翻译与写作' },
      { name: '有道助手', url: 'https://youdao.com/', desc: '翻译与写作辅助', group: '翻译与写作' },
      { name: 'Ginger 校对', url: 'https://www.gingersoftware.com/', desc: '英文语法校对', group: '翻译与写作' },
      { name: '1Checker 校对', url: 'https://www.1checker.com/', desc: '英文写作检查工具', group: '翻译与写作' },
      { name: 'NounPlus 校对', url: 'https://www.nounplus.net/', desc: '英文语法检查', group: '翻译与写作' },
      { name: 'AutoCrit 校对', url: 'https://www.autocrit.com/', desc: '写作风格与语法校对', group: '翻译与写作' },
      { name: 'Hemingway Editor', url: 'https://hemingwayapp.com/', desc: '提升英文表达简洁度', group: '翻译与写作' },
      { name: 'Lang-8 语言互助', url: 'http://lang-8.com/', desc: '母语者互相修改写作', group: '翻译与写作' },
      { name: 'Plasma 建模', url: 'http://www.adas.ac.uk/about.php', desc: '等离子体建模与仿真', group: '数据分析与建模' },
      { name: 'Matlabsky', url: 'http://www.matlabsky.com/', desc: 'MATLAB 相关资源与插件', group: '数据分析与建模' },
      { name: 'MATLAB Statistics', url: 'https://www.mathworks.com/products/statistics.html', desc: '统计与机器学习工具箱', group: '数据分析与建模' },
      { name: 'LIBSVM', url: 'https://www.csie.ntu.edu.tw/~cjlin/libsvm/', desc: 'SVM 工具，LIBS 数据建模常用', group: '数据分析与建模' },
      { name: 'OriginLab', url: 'https://www.originlab.com/', desc: '数据绘图与分析软件', group: '数据分析与建模' },
      { name: '数据圈软件', url: 'http://www.shujuquan.com.cn/', desc: '数据分析相关软件资源', group: '数据分析与建模' },
      { name: '我要自学网', url: 'https://www.51zxw.net/', desc: '软件与技能自学平台', group: '学习与资源' },
      { name: '在线 PS', url: 'https://www.uupoop.com/', desc: '在线图片编辑', group: '学习与资源' },
      { name: 'PDF 工具', url: 'https://smallpdf.com/cn', desc: 'PDF 编辑与转换工具', group: '学习与资源' },
      { name: '在线转换', url: 'https://convertio.co/zh/', desc: '多格式在线转换', group: '学习与资源' },
      { name: '在线工具合集', url: 'https://tool.lu/', desc: '程序员与科研常用在线工具合集', group: '学习与资源' },
      { name: 'Overleaf', url: 'https://www.overleaf.com/', desc: '在线 LaTeX 协同写作平台', group: '学习与资源' },
      { name: 'Zotero', url: 'https://www.zotero.org/', desc: '开源文献管理与引用工具', group: '学习与资源' },
      { name: 'Mendeley', url: 'https://www.mendeley.com/', desc: '文献管理与科研协作平台', group: '学习与资源' },
      { name: 'BookSC', url: 'http://booksc.org/', desc: '图书下载与检索平台', group: '科研神器与灵感' },
      { name: 'Booksee', url: 'http://en.booksee.org/', desc: '英文图书资源平台', group: '科研神器与灵感' },
      { name: '学术资源大全', url: 'http://www.xszydq.com/', desc: '综合学术资源导航', group: '科研神器与灵感' },
      { name: '在线格式转换（Convertio）', url: 'https://convertio.co/zh/', desc: '各类文件格式在线转换', group: '科研神器与灵感' },
      { name: 'PPT 插画资源', url: 'http://www.shejidaren.com/category/design-resources', desc: '插画与设计素材', group: '科研神器与灵感' },
      { name: '星际视觉', url: 'https://wangyasai.github.io/Stars-Emmision/', desc: '有趣的星空可视化实验', group: '科研神器与灵感' },
      { name: 'Perlin 噪声可视化', url: 'https://wangyasai.github.io/Perlin-Noise/', desc: '噪声与纹理可视化', group: '科研神器与灵感' },
      { name: '镜像炫光', url: 'http://weavesilk.com/', desc: '镜像炫光艺术，可用于灵感与可视化', group: '科研神器与灵感' },
      { name: 'Stardock Fences', url: 'http://rj.baidu.com/soft/detail/13334.html', desc: '桌面图标分类组织工具', group: '科研神器与灵感' },
      { name: 'Rainlandar', url: 'https://baike.so.com/doc/7783340-8057435.html', desc: '桌面日历记事工具', group: '科研神器与灵感' },
      { name: 'Gen.lib.rus.ec', url: 'http://gen.lib.rus.ec/', desc: '免费图书下载资源', group: '科研神器与灵感' },
      { name: 'EndNote样式', url: 'http://endnote.com/downloads/styles', desc: 'EndNote文献管理样式下载', group: '科研神器与灵感' },
      { name: '国家重点研发计划', url: 'https://service.most.gov.cn/', desc: '国家重点研发计划申报平台', group: '基金与项目' },
      { name: '国家自然科学基金', url: 'https://isisn.nsfc.gov.cn/', desc: '自然科学基金申报与管理', group: '基金与项目' },
      { name: '科技部', url: 'https://www.most.gov.cn/', desc: '科技政策与项目申报信息', group: '基金与项目' },
      { name: '博士后基金', url: 'http://jj.chinapostdoctor.org.cn/', desc: '博士后科研项目基金', group: '基金与项目' },
      { name: '湖北省科技厅', url: 'https://kjt.hubei.gov.cn/', desc: '湖北省地方科研基金信息', group: '基金与项目' },
      { name: '武汉市科技局', url: 'http://kjj.wuhan.gov.cn/', desc: '武汉市科技计划与项目', group: '基金与项目' },
      { name: '淘宝网', url: 'http://www.taobao.com/', desc: '淘宝购物平台', group: '常用工具' },
      { name: '京东商城', url: 'http://www.jd.com/', desc: '京东电商平台', group: '常用工具' },
      { name: '12306火车票', url: 'http://www.12306.cn/mormhweb/', desc: '中国铁路客户服务中心', group: '常用工具' },
      { name: '小众软件', url: 'https://www.appinn.com/', desc: '软件推荐与下载平台', group: '常用工具' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com', desc: '全球职业发展与人脉网络平台', group: '职业发展' },
      { name: '大街网', url: 'https://www.dajie.com/', desc: '大街网招聘平台', group: '职业发展' },
      { name: '高校人才网', url: 'https://www.gaoxiaojob.com', desc: '高校与科研院所招聘信息', group: '职业发展' },
      { name: '前程无忧', url: 'https://www.51job.com', desc: '国内招聘与职位搜索', group: '职业发展' },
      { name: '硕博在线', url: 'http://www.gxzpw.org/', desc: '硕博研究生就业平台', group: '职业发展' },
      { name: '高层人才网', url: 'http://www.gccrcw.com/', desc: '高层人才招聘平台', group: '职业发展' },
      { name: '留学网', url: 'http://www.liuxue.net/', desc: '留学信息与申请平台', group: '职业发展' },
      { name: '博士人才网', url: 'http://www.91boshi.net/', desc: '博士人才招聘平台', group: '职业发展' },
      { name: '硕博人才网', url: 'http://www.shuobo114.com/', desc: '硕博人才招聘信息', group: '职业发展' },
      { name: '硕博招聘网', url: 'http://www.shuobozhaopin.com/', desc: '硕博职位招聘平台', group: '职业发展' },
      { name: '硕博英才网', url: 'http://www.shuobojob.com/', desc: '硕博英才招聘平台', group: '职业发展' },
      { name: '猎聘网', url: 'https://www.liepin.com/?mscid=s_00_pz1', desc: '高端人才招聘平台', group: '职业发展' }
    ]
  }
]

