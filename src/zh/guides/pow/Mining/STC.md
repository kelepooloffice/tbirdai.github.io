# 🪙 STC挖矿教程

Starcoin 是一个去中心化分层智能合约网络，它旨在提供一种安全的数字资产及去中心化金融运行平台，让区块链能够更低门槛应用在更多领域。STC支持ASIC矿机挖矿，主要矿机型号有：金贝ST-BOX、S1 MINI等 。

### 支付计划

结算方式：PPLNS       费率：2.00%      起付额：10STC

收益账单于次日早8点生成，**如果余额达到支付门槛，链上支付**将在次日完成。

## 1.登录可乐矿池账号

登录及设置收款地址流程参考[新手入门](../../)，使用邮箱登录后，记录下子账户名称备用；
若使用钱包或匿名登录，则子账户为登录地址；

**网站地址（需VPN开全局代理）：** [**`https://www.kelepool.com/`**](https://www.kelepool.com/)

## 2.使用矿梯

可乐矿池推荐国内用户使用矿梯代理线路，更加隐蔽安全，更加高效，查看[矿梯使用教程](../ladder.md)

## 3.配置挖矿设备

### a. 进入矿机设置

1. 矿机应与电脑置于同一网络，
2. 通过矿机IP查找软件（如路由器管理软件或IP Report等）获取矿机IP，
3. 在电脑浏览器中输入矿机IP进行设置，或使用各类挖矿软件完成设置，具体流程参照各矿机官方给出的教程。

### b. 填写挖矿地址

**挖矿地址即对应矿池的矿池地址**，可前往**可乐矿池-矿池挖矿-总览右下角（左上角切换币种）**查看最新地址，需注意的是可能因为杀毒软件/防火墙等原因会导致地址无法显示，关闭杀毒软件/防火墙即可，可乐矿池目前STC**地址如下**（不同币种地址不一样）：&#x20;

* **URL1：stratum+tcp://stc.kelepool.com:8**

### c. 填写矿工名

矿工名填写模式为：**矿池里的子账号/用户名.编号**，子账户/用户名即“矿池挖矿-切换账户”中显示的挖矿账户名，编号是区分矿机的编号，可按照自己需要自由编写，如有多台矿机，可以子账户名XXX为开头按XXX.01，XXX.02这个规律给机器编号方便管理。

## 4.添加收款信息

您可以通过如下方式获取STC钱包地址，以接收挖矿收益。

&#x20;[StarMask](https://chrome.google.com/webstore/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk)、[币信](https://www.bixin.com/en/)、[OneKey](https://onekey.so)等，注册帐户并找到STC充值，即可获取交易所钱包地址



## 5.注意事项

* 通过上面设置不难看出是否使用矿梯作为代理的区别主要体现在矿机上设置时是填写可乐矿池地址还是填写矿梯地址；
* 因为矿池的挖矿地址可能出现问题，一般一个矿池会提供多个挖矿地址做备用；
* 同一台矿机在填写了同一个矿池的多个挖矿地址时，使用同一个矿工名（也就是同一个子账户/用户名.编号）；
* 同一台矿机若设置了不同矿池的挖矿地址，则矿工名要填写对应矿池的子账户/用户名；
* 若用户在可乐矿池拥有多个子账户，则每个子账号都需要单独设置收款地址（可以共用收款地址），填写矿工名时需注意收益将进入对应子账号的收款地址；
* 多台矿机在设置矿工名时应在编号部分进行区分，如填写成同样的矿工名则只能在矿池里看到一台，但真实算力不受影响，仍旧是多台矿机的叠加；
* **挖矿地址和矿工名的填写非常重要**，如填错了则可能导致收益受损，若不确定请联系客服。

## 6.验证连接成功

设置完成后，可以稍等一会儿，再通过以下方式确认矿梯和矿机是否连接成功正常工作：

1、查看挖矿软件的日志或活动面板，确认矿机正常工作且算力显示正常&#x20;

2、前往可乐矿池的总览页面查看活跃矿机数量和算力是否正常，预估收益可能出现偏差，以第二天实际结算的收益为准。

![](<../../.gitbook/assets/new/stc.png>)