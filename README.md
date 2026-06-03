# 💍 Ever After - Wedding Guest Management System

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-f38020?style=for-the-badge&logo=cloudflare)
![React](https://img.shields.io/badge/Frontend-React-61dafb?style=for-the-badge&logo=react)
![SQLite](https://img.shields.io/badge/Database-D1_SQLite-003B57?style=for-the-badge&logo=sqlite)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

**Ever After** သည် Cloudflare Workers နှင့် D1 Database (SQLite) ကို အသုံးပြု၍ Serverless Architecture ဖြင့် ရေးသားထားသော **မင်္ဂလာပွဲ ဧည့်သည်စာရင်း စီမံခန့်ခွဲမှုစနစ်** ဖြစ်ပါသည်။ Hosting / Server ဖိုး လုံးဝပေးစရာမလိုဘဲ Free Tier ဖြင့် အလွယ်တကူ အသုံးပြုနိုင်ရန် ဖန်တီးထားပါသည်။

---

## ✨ အဓိက လုပ်ဆောင်ချက်များ (Key Features)

* **⚡ Single File Architecture:** Frontend (React) နှင့် Backend (API & DB) အားလုံးကို `worker.js` ဖိုင်တစ်ခုတည်းတွင် ပေါင်းစပ်ရေးသားထားသဖြင့် Deploy လုပ်ရန် အလွန်လွယ်ကူသည်။
* **📊 Real-time Dashboard:** ဧည့်သည်စုစုပေါင်း၊ ဖိတ်စာဝေပြီးသူ၊ တက်ရောက်သူ၊ လက်ဖွဲ့ငွေနှင့် လက်ဖွဲ့ပစ္စည်း စုစုပေါင်းတို့ကို အချိန်နှင့်တစ်ပြေးညီ တွက်ချက်ပြသပေးခြင်း။
* **🔐 Role-Based Access Control (RBAC):** `Admin` နှင့် `Staff` ဟူ၍ အကောင့် (၂) မျိုးခွဲခြားထားပြီး ငွေစာရင်းလုံခြုံရေးကို အထူးကာကွယ်ပေးထားသည်။
* **🚀 High Performance Search:** ဧည့်သည်စာရင်း ထောင်ဂဏန်းရှိနေလျှင်ပင် ဖုန်းဟန်းခြင်းမရှိစေရန် **Search Debouncing** နှင့် **Server-side Pagination** စနစ်ကို အသုံးပြုထားသည်။
* **☁️ Smart Storage Fallback:** ပုံများ (Monogram) တင်ရန်အတွက် Cloudflare R2 Storage အား ချိတ်ဆက်နိုင်ပြီး၊ မချိတ်ဆက်ထားပါကလည်း D1 Database အတွင်း အလိုအလျောက် ပြောင်းလဲသိမ်းဆည်းပေးမည့် စနစ်ပါဝင်သည်။
* **📥 Excel Import / Export:** ဧည့်သည်စာရင်းများကို Excel (`.xlsx`, `.csv`) မှတစ်ဆင့် အလွယ်တကူ အစုလိုက် သွင်းနိုင်/ထုတ်နိုင်ခြင်း။
* **📝 Activity Audit Logs:** မည်သူက မည်သည့်အချိန်တွင် ဧည့်သည်စာရင်းကို အတိုး/အလျော့ လုပ်သွားသည်ကို နောက်ကွယ်မှ မှတ်တမ်းတင်ပေးထားသော စနစ်။
* **🔑 Master Recovery Key:** Password မေ့သွားပါက အလွယ်တကူ ပြန်လည်ရယူနိုင်မည့် ကိုယ်ပိုင် လျှို့ဝှက် Key စနစ်။
* **🇲🇲 Perfect Typography:** မြန်မာစာအတွက် အထူးသီးသန့် `Padauk` ဖောင့်စနစ်ကို အသုံးပြုထားသဖြင့် ဖတ်ရလွယ်ကူပြီး သပ်ရပ်ကျစ်လစ်သော အမြင်ကို ရရှိစေသည်။

---

## 🔒 အကောင့်ခွဲစနစ် (Role-Based Access)

လုံခြုံရေးနှင့် ပွဲနေ့တွင် ဧည့်ခံမည့်သူများအတွက် အထူးရည်ရွယ်၍ အကောင့် (၂) မျိုး ခွဲခြားပေးထားပါသည်။

| Role (အခန်းကဏ္ဍ) | Default Username | Default Password | လုပ်ဆောင်နိုင်ခွင့်များ (Permissions) |
| :--- | :--- | :--- | :--- |
| 👑 **Admin** | `admin` | `admin123` | **အပြည့်အဝ ထိန်းချုပ်ခွင့်ရှိသည်။** <br> • လက်ဖွဲ့ငွေများအားလုံး မြင်တွေ့နိုင်စစ်ဆေးနိုင်သည်။<br> • ဧည့်သည်များအား အစုလိုက်ဖျက်သိမ်းနိုင်သည်။<br> • မှတ်တမ်း (Logs) နှင့် Settings ပြင်ဆင်နိုင်သည်။ |
| 💁‍♀️ **Staff** | `staff` | `staff123` | **ဧည့်ခံရေးအဖွဲ့အတွက်သာ။** <br> • ဧည့်သည်ရှာဖွေခြင်း၊ အသစ်ထည့်ခြင်းနှင့် `Attended` မှတ်ခြင်းများ လုပ်နိုင်သည်။<br> • 🚫 *လက်ဖွဲ့ငွေပမာဏများကို `*** Ks` အဖြစ် ဖုံးကွယ်ထားမည်။* <br> • 🚫 *ဧည့်သည်အား ဖျက်ပစ်ခွင့်မရှိပါ။ Logs နှင့် Settings ဝင်ခွင့်မရှိပါ။* |

---

## 🛠️ တပ်ဆင်နည်း အဆင့်ဆင့် (Setup Guide)

### အဆင့် (၁): Database ဖန်တီးခြင်း
1. သင်၏ Cloudflare Dashboard သို့ ဝင်ပါ။
2. ဘယ်ဘက် Menu မှ **Storage & Databases > D1 SQL** သို့ သွားပြီး `Create Database` ကို နှိပ်ပါ။
3. Database နာမည်ကို `wedding-db` (သို့မဟုတ် မိမိနှစ်သက်ရာ) ပေးပါ။

### အဆင့် (၂): R2 Storage ဖန်တီးခြင်း (Optional) *[အကြံပြုပါသည်]*
1. ဘယ်ဘက် Menu မှ **Storage & Databases > R2** သို့ သွားပြီး `Create bucket` ကို နှိပ်ပါ။
2. Bucket နာမည်ကို `wedding-assets` ဟု ပေးပါ။

### အဆင့် (၃): Cloudflare Worker တည်ဆောက်ခြင်း
1. **Workers & Pages** သို့ သွားပြီး `Create application` > `Create Worker` ကို နှိပ်ပါ။
2. Worker အား နာမည်ပေးပြီး (ဥပမာ - `ever-after-wedding`) `Deploy` ကို နှိပ်ပါ။
3. ပြီးလျှင် ထို Worker ၏ **Settings > Variables and Secrets > Bindings** သို့ သွားပါ။
    * **D1 Database ချိတ်ဆက်ရန်:** `Add` > `D1 Database` ကိုရွေးပါ။ Variable name တွင် **`DB`** ဟုပေးပြီး ခုနကဆောက်ခဲ့သော Database ကို ရွေးပါ။
    * **R2 Bucket ချိတ်ဆက်ရန် (ရှိပါက):** `Add` > `R2 Bucket` ကိုရွေးပါ။ Variable name တွင် **`BUCKET`** ဟုပေးပြီး ခုနကဆောက်ခဲ့သော Bucket ကို ရွေးပါ။
4. `Save and deploy` ကိုနှိပ်ပါ။

### အဆင့် (၄): ကုဒ်ထည့်သွင်းခြင်း (Deployment)
1. Worker ၏ ညာဘက်အပေါ်ထောင့်ရှိ **Edit Code** ကို နှိပ်ပါ။
2. Code Editor ထဲတွင် မူလရှိနေသော ကုဒ်ဟောင်းများအားလုံးကို **ဖျက်ပစ်ပါ (Ctrl+A -> Delete)**။
3. ဤ Repository မှ `worker.js` ဖိုင်ထဲရှိ ကုဒ်အပြည့်အစုံကို Copy ကူး၍ Paste ချပါ။
4. ညာဘက်အပေါ်ထောင့်မှ **Save and deploy** ကို နှိပ်ပါ။
   > ⚠️ *(မှတ်ချက်: "Unexpected token export" error တက်ပါက ကုဒ်အလွတ် `export default { fetch() { return new Response("OK") } }` ကို အရင် Deploy လုပ်ပြီးမှ ကုဒ်အရှည်ကြီးကို ပြန်ထည့်ပါ)*။

### အဆင့် (၅): Database အား အသက်သွင်းခြင်း (Initialization) - ⚠️ အရေးကြီး
Code ကို Deploy လုပ်ပြီးပါက Database အတွင်း လိုအပ်သော Table များတည်ဆောက်ရန်နှင့် Default အကောင့်များ ဖန်တီးရန်အတွက် အောက်ပါအဆင့်ကို **မဖြစ်မနေ (၁) ကြိမ်** လုပ်ဆောင်ပေးရပါမည်-
1. သင်၏ Browser တွင် Worker ၏ URL အနောက်၌ `/api/setup` ဟု ရိုက်ထည့်ပြီး ဖွင့်ပါ။ 
   *(ဥပမာ - `https://ever-after.yourname.workers.dev/api/setup`)*
2. မျက်နှာပြင်တွင် `"Database Schema & Indexes Updated Successfully!"` ဟု ပေါ်လာပါက တပ်ဆင်ခြင်း ရာနှုန်းပြည့် အောင်မြင်ပါပြီ။ App ပင်မလင့်ခ်သို့ ပြန်သွား၍ စတင်အသုံးပြုနိုင်ပါပြီ။

---

## 📖 အသုံးပြုနည်း လမ်းညွှန် (Usage Manual)

### ၁။ Settings ပြင်ဆင်ခြင်းနှင့် လုံခြုံရေး (Admin Only)
- Admin အကောင့် (`admin` / `admin123`) ဖြင့် စတင် Login ဝင်ပါ။
- **Settings** (ဂီယာပုံ) သို့ သွားပါ။
- **Account Security:** နေရာတွင် `admin` နှင့် `staff` အကောင့် နှစ်ခုလုံးအတွက် မိမိကိုယ်ပိုင် Password အသစ်များကို ချက်ချင်း ပြောင်းလဲပါ။
- **Master Recovery Key:** Password မေ့သွားပါက ပြန်ယူရန် (Default: `EverAfter2026`) အား မိမိလျှို့ဝှက်ချက်အဖြစ် ပြောင်းလဲသတ်မှတ်ပါ။
- ကျန်ရှိသော သတို့သား/သတို့သမီး အမည်၊ ရက်စွဲ၊ နေရာ၊ Monogram ပုံ နှင့် Theme အရောင်များကို စိတ်ကြိုက် ပြင်ဆင်ပါ။

### ၂။ ဧည့်သည်စာရင်းသွင်းခြင်း (Guest Management)
- **Guests** (လူပုံစံ) မျက်နှာပြင်သို့ သွားပါ။
- **+ Add** ကိုနှိပ်၍ ဧည့်သည်တစ်ဦးချင်းစီ၏ အမည်၊ လိပ်စာ၊ ဖက် (သတို့သား/သတို့သမီး/နှစ်ဖက်) ကို ထည့်သွင်းနိုင်ပါသည်။
- **Import** ကိုနှိပ်၍ `Name, Address, Side, Status, Attended, Gift Amount, Gift Item, Note` စသည့် ခေါင်းစဉ်များပါဝင်သော Excel (သို့) CSV ဖိုင်ဖြင့် ဧည့်သည် ထောင်ဂဏန်းကို အစုလိုက် လွယ်ကူစွာ သွင်းနိုင်ပါသည်။

### ၃။ ပွဲနေ့တွင် ဧည့်ခံခြင်း (Staff Reception)
- ပွဲနေ့တွင် ဧည့်ခံရေးကောင်တာရှိ ဖုန်း/Tablet များ၌ `staff` အကောင့်ဖြင့် Login ဝင်ပေးထားပါ။
- ဧည့်သည်ရောက်လာပါက အမည် သို့မဟုတ် လိပ်စာဖြင့် ရှာဖွေပြီး ခဲတံပုံ (Edit) ကို နှိပ်ကာ **"ရောက်ရှိ (Attended)"** အား အမှန်ခြစ်ပေးပါ။ ပါလာသော လက်ဖွဲ့ပစ္စည်းနှင့် ငွေများကို စာရင်းသွင်းနိုင်ပါသည်။ သို့သော် လုံခြုံရေးအရ ငွေပမာဏများကို `***` ဖြင့် ဖုံးကွယ်ပေးထားမည် ဖြစ်သည်။

### ၄။ Password ပြန်လည်ရယူခြင်း (Forgot Password)
- လုံခြုံရေးအရ Email/OTP များကို အသုံးမပြုပါ။
- Login မျက်နှာပြင်ရှိ **"Forgot Password?"** ကို နှိပ်ပါ။
- မိမိ၏ Username နှင့် Settings တွင် သိမ်းဆည်းထားခဲ့သော **Master Recovery Key** ကို ရိုက်ထည့်၍ Password အသစ်ကို ချက်ချင်း ပြောင်းလဲနိုင်ပါသည်။

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details. You are free to use, modify, and distribute this software for personal or commercial purposes.

---

## 👨‍💻 Developer & Contact

Developed with ❤️ by **Thiha Aung (Yone Man)** Open-source Contributor & Web Developer based in Myanmar.

- 📧 Email: [audiobar.ym@gmail.com](mailto:audiobar.ym@gmail.com)
- ✈️ Telegram: [@thihaaung44](https://t.me/thihaaung44)
- 🌐 GitHub: [audiobar](https://github.com/audiobar)

*If you encounter any issues during setup or have feature requests, feel free to reach out or open an issue in this repository!*
