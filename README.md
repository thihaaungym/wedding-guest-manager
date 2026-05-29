# wedding-guest-manager
A full-stack, enterprise-grade Wedding Guest Management App utilizing Cloudflare Workers, D1 Database, R2 Storage, and seamless Excel integrations.
# 💍 Ever After - မင်္ဂလာဧည့်သည်စာရင်း စီမံခန့်ခွဲမှုစနစ်

ဤစနစ်သည် **Cloudflare Workers** (ဖိုင်တစ်ခုတည်း) ပေါ်တွင် အပြည့်အဝ တည်ဆောက်ထားသော လုပ်ငန်းသုံးအဆင့် (Enterprise-grade) မင်္ဂလာဧည့်သည်စာရင်း မှတ်သားသည့် Application ဖြစ်ပါသည်။ **React** (Frontend), **D1** (SQL Database) နှင့် **R2** (Object Storage) တို့ကို အသုံးပြု၍ လုံခြုံမြန်ဆန်စွာ ဖန်တီးထားပါသည်။

## ✨ ပါဝင်သော လုပ်ဆောင်ချက်များ (Features)
- 📊 **Smart Dashboard:** ဖိတ်စာပေးပို့မှု အခြေအနေများကို ဂရပ်များ၊ ကိန်းဂဏန်းများဖြင့် ရှင်းလင်းစွာ ကြည့်ရှုနိုင်ခြင်း။
- 👥 **Guest Roster:** ဧည့်သည်စာရင်း အသစ်ထည့်ခြင်း၊ ပြင်ဆင်ခြင်း၊ ဖျက်ခြင်းနှင့် လိပ်စာအလိုက် ရှာဖွေခြင်းများကို လွယ်ကူစွာ ပြုလုပ်နိုင်ခြင်း။
- 💰 **Gift Tracking:** လက်ဖွဲ့ငွေနှင့် လက်ဖွဲ့ပစ္စည်းများကို စနစ်တကျ မှတ်သားထားနိုင်ခြင်း။
- 📥 **Excel Integration:** ဧည့်သည်စာရင်းများကို Excel (`.xlsx`) ဖိုင်ဖြင့် အလွယ်တကူ သွင်း/ထုတ် (Import/Export) ပြုလုပ်နိုင်ခြင်း။ (လူ ၁၀,၀၀၀ အထိ အလွယ်တကူ သွင်းနိုင်သည်)
- 🎨 **Luxury UI:** *Playfair Display* ဖောင့်ကို အသုံးပြုထားပြီး ခမ်းနားလှပသော Glassmorphism ဒီဇိုင်းဖြင့် ဖန်တီးထားခြင်း။
- 🔒 **High Security:** အချက်အလက်များကို လုံခြုံစွာ သိမ်းဆည်းနိုင်ရန် အဆင့်မြင့် Session-based Authentication လုံခြုံရေးစနစ် ပါဝင်ခြင်း။

---

## 🚀 Cloudflare တွင် အခမဲ့ တည်ဆောက်ရန် အဆင့်ဆင့် လမ်းညွှန်

သင့်ကိုယ်ပိုင် မင်္ဂလာဧည့်သည်စာရင်း App ကို Cloudflare တွင် အခမဲ့ (Free) လွယ်ကူစွာ တည်ဆောက်နိုင်ရန် အောက်ပါအဆင့်များအတိုင်း လုပ်ဆောင်ပါ-

### အဆင့် ၁: Cloudflare Worker တည်ဆောက်ခြင်း
1. [Cloudflare Dashboard](https://dash.cloudflare.com) သို့ ဝင်ရောက်ပါ။
2. ဘေးဘက် Menu မှ **Workers & Pages** ထဲသို့ ဝင်ပြီး **Create Worker** ကို နှိပ်ပါ။
3. Worker နာမည်တစ်ခုပေးပါ (ဥပမာ - `my-wedding-app`) ပြီးလျှင် **Deploy** ကို နှိပ်ပါ။
4. **Edit Code** ကိုနှိပ်ပါ။ မူလရှိနေသော ကုဒ်အဟောင်းများကို အကုန်ဖျက်ပြီး ဤ Repository ရှိ `worker.js` ဖိုင်ထဲမှ ကုဒ်အကုန်လုံးကို Copy ကူးထည့်ပါ။ ထို့နောက် **Save and deploy** ကို နှိပ်ပါ။

### အဆင့် ၂: D1 Database ချိတ်ဆက်ခြင်း (ဧည့်သည်စာရင်းများ သိမ်းရန်)
1. ဘေးဘက် Menu ရှိ **Storage & Databases** အောက်မှ **D1 SQL Database** သို့သွားပြီး **Create Database** ကို နှိပ်ပါ (နာမည်ကို `wedding_db` ဟု ပေးပါ)။
2. မိမိ Worker ၏ **Settings** -> **Bindings** သို့သွားပြီး **Add Binding** မှတစ်ဆင့် **D1 database** ကို ရွေးပါ။
3. **Variable name:** နေရာတွင် `DB` ဟု အင်္ဂလိပ်စာလုံးအကြီးဖြင့် အတိအကျ ရိုက်ထည့်ပါ။
4. **Database:** နေရာတွင် ခုနကဆောက်ခဲ့သော `wedding_db` ကို ရွေးပြီး Save နှိပ်ပါ။

### အဆင့် ၃: R2 Storage ချိတ်ဆက်ခြင်း (Logo ပုံများ သိမ်းရန်)
1. ဘေးဘက် Menu ရှိ **Storage & Databases** အောက်မှ **R2 Object Storage** သို့သွားပြီး **Create bucket** ကို နှိပ်ပါ (နာမည်ကို `wedding-logos` ဟု ပေးပါ)။
2. မိမိ Worker ၏ **Settings** -> **Bindings** သို့သွားပြီး **Add Binding** မှတစ်ဆင့် **R2 bucket** ကို ရွေးပါ။
3. **Variable name:** နေရာတွင် `BUCKET` ဟု အင်္ဂလိပ်စာလုံးအကြီးဖြင့် အတိအကျ ရိုက်ထည့်ပါ။
4. **R2 bucket:** နေရာတွင် ခုနကဆောက်ခဲ့သော `wedding-logos` ကို ရွေးပြီး Save နှိပ်ပါ။

### အဆင့် ၄: Database အသက်သွင်းခြင်း (အလွန်အရေးကြီးပါသည်!)
1. သင့် Browser အသစ်တစ်ခု ဖွင့်ပြီး သင့် Worker ၏ လင့်ခ်အနောက်၌ `/api/setup` ဟု ရိုက်ထည့်၍ ဖွင့်ပါ။
   *(ဥပမာ - `https://my-wedding-app.your-username.workers.dev/api/setup`)*
2. မျက်နှာပြင်ပေါ်တွင် **"Database Schema Updated Successfully! You can now log in."** ဟု ပေါ်လာပါလိမ့်မည်။ (ဒါဆိုလျှင် စနစ်အားလုံး ချိတ်ဆက်ပြီးပါပြီ)။

### အဆင့် ၅: စတင် အသုံးပြုခြင်း
- သင့် Worker ၏ ပင်မလင့်ခ် သို့ ပြန်သွားပါ။ လော့ဂ်အင် (Login) ဝင်ရန် နေရာ ပေါ်လာပါမည်။
- **Default Username:** `admin`
- **Default Password:** `admin123`
*(⚠️ သတိပြုရန် - ပထမဆုံးအကြိမ် Login ဝင်ပြီးသည်နှင့် "Settings" စာမျက်နှာသို့ သွား၍ Username နှင့် Password ကို မိမိစိတ်ကြိုက် ချက်ချင်း ပြောင်းလဲပါ!)*

---

## 🛠️ ဖန်တီးသူ (Developed By)
Crafted with elegance by **Thiha Aung (Yone Man)**. 
