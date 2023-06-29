# 配置飞书
**由于钉钉限制移动端无法添加自定义机器人，您需通过PC端完成添加。**

## 邀请机器人进群组

#### 1. 进入目标群组，在群组右上角点击更多按钮，并点击 设置。
![发起群聊](<../../.gitbook/assets/notification/f0.png>)

#### 2. 在右侧 设置 界面，点击 群机器人。
![创建群](<../../.gitbook/assets/notification/f1.png>)

#### 3. 在 群机器人 界面点击 添加机器人。
#### 4. 在 添加机器人 对话框，找到 自定义机器人，并 添加。

![群机器人](<../../.gitbook/assets/notification/f2.png>)

#### 5. 设置自定义机器人的名称与描述，并点击 添加。
![添加机器人](<../../.gitbook/assets/notification/f3.png>)

#### 6. 获取自定义机器人的 webhook 地址，并点击 复制。
![复制地址](<../../.gitbook/assets/notification/f4.png>)

成功添加机器人后，查看机器人对应的 webhook 地址。地址格式如下：

> https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxxxxxxxxxxx 

请妥善保存好此 webhook 地址，不要公布在 Gitlab、博客等可公开查阅的网站上，避免地址泄露后被恶意调用发送垃圾消息。

#### 11. 复制 [Webhook] 地址，添加到配置中，点击保存即可添加成功

![发起群聊](<../../.gitbook/assets/notification/f6.png>)
![发起群聊](<../../.gitbook/assets/notification/f7.png>)