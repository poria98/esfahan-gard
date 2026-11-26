// اصفهان‌گرد – ظرفیت‌های فرهنگی و تاریخی شهرستان‌های استان اصفهان
const C={n:'#10243E',t:'#157A82',g:'#E0A526',m:'#B98B5E',s:'#D9B98A'};
const ART={
mosque:`<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="${C.t}"/><circle cx="240" cy="30" r="14" fill="${C.g}"/><rect x="40" y="40" width="14" height="90" fill="${C.s}"/><rect x="36" y="34" width="22" height="8" fill="${C.m}"/><path d="M80 130V80q70-70 140 0v50z" fill="${C.s}"/><path d="M115 130V95q35-45 70 0v35z" fill="${C.n}"/><rect y="130" width="300" height="20" fill="${C.m}"/></svg>`,
castle:`<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="${C.n}"/><circle cx="60" cy="35" r="14" fill="${C.g}"/><path d="M30 140V110h40V85h40V60h50V40h40v20h30v35h30v45z" fill="${C.m}"/><g fill="${C.n}"><rect x="135" y="55" width="8" height="14" rx="4"/><rect x="170" y="75" width="8" height="14" rx="4"/><rect x="100" y="98" width="8" height="14" rx="4"/></g><rect y="140" width="300" height="10" fill="${C.s}"/></svg>`,
bazaar:`<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="${C.m}"/><g fill="${C.s}"><path d="M0 150V70q37-50 75 0v80z"/><path d="M75 150V70q37-50 75 0v80z" opacity=".8"/><path d="M150 150V70q37-50 75 0v80z"/><path d="M225 150V70q37-50 75 0v80z" opacity=".8"/></g><circle cx="75" cy="40" r="6" fill="${C.g}"/><circle cx="225" cy="40" r="6" fill="${C.g}"/></svg>`,
house:`<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="${C.t}"/><rect x="50" y="50" width="200" height="90" fill="${C.s}"/><g fill="${C.n}"><path d="M75 140V90q20-30 40 0v50z"/><path d="M130 140V90q20-30 40 0v50z"/><path d="M185 140V90q20-30 40 0v50z"/></g><rect x="40" y="40" width="220" height="12" fill="${C.g}"/></svg>`,
water:`<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="${C.t}"/><path d="M90 120V85q60-70 120 0v35z" fill="${C.s}"/><path d="M140 120v-18q10-14 20 0v18z" fill="${C.n}"/><g fill="${C.m}"><rect x="60" y="120" width="180" height="8"/><rect x="45" y="128" width="210" height="8"/><rect x="30" y="136" width="240" height="14"/></g><circle cx="250" cy="30" r="12" fill="${C.g}"/></svg>`,
nature:`<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="${C.n}"/><circle cx="220" cy="45" r="20" fill="${C.g}"/><path d="M0 150V100q60-50 130-10t170-20v80z" fill="${C.m}"/><path d="M0 150V125q90-40 170-5t130-5v35z" fill="${C.s}"/></svg>`,
star:`<svg viewBox="0 0 300 60"><g fill="${C.t}" opacity=".55"><path d="M0 60V40h20V20h20V0h20v20h20v20h20v20z"/><path d="M120 60V30h30V10h30v20h30v30z"/><path d="M240 60V35h20V15h20v20h20v25z"/></g></svg>`};
const S=[
{id:'mosque',n:2,t:'مسجد جامع نایین',tag:'یکی از کهن‌ترین مساجد ایران',a:'mosque',q:'مسجد جامع نایین',
f:[['دوران','سده‌های نخست اسلامی'],['سبک','شبستانی، خراسانی'],['ثبت ملی','۱۳۱۰ شمسی'],['مناره','حدود ۲۸ متر']],
d:'مسجد جامع نایین از قدیمی‌ترین مساجد ایران است و هنوز هم مسجدی زنده و مورد استفاده است. منابع، ساخت نخستین آن را از سدهٔ سوم تا چهارم هجری نوشته‌اند. طرح آن ساده است: حیاطی مستطیلی که شبستان‌های ستون‌دار سه طرفش را گرفته‌اند. شهرت مسجد به گچ‌بری‌های برجستهٔ محراب و ستون‌هاست؛ نقش‌هایی مانند گل دوازده‌پر و پالمت که پیوند هنر ایرانی با هنر اسلامی را نشان می‌دهند.',
k:'منبر چوبی مسجد از دورهٔ ایلخانی (حدود ۷۰۰ سال پیش) است و زیر مسجد سردابی دست‌کَند وجود دارد. مناره از شکل چهارگوش آغاز می‌شود و به شکل گرد می‌رسد؛ نمونه‌ای از گذار مناره‌سازی ایران.',
p:['شبستان تابستانی و زمستانی و گچ‌بری محراب را از نزدیک ببینید.','با پوشش مناسب و آرام وارد شوید و زمان نماز را رعایت کنید.','بالای مناره (در صورت باز بودن) حیاط و شهر دیده می‌شود.']},
{id:'narin',n:2,t:'نارین‌قلعه',tag:'دژ خشتی پیش از اسلام',a:'castle',q:'نارین قلعه نایین',
f:[['دوران','پیش از اسلام'],['مصالح','خشت و گل'],['ورود','رایگان'],['وضعیت','بقایای دیوار و طاق']],
d:'نارین‌قلعه (نارنج‌قلعه) دژ کهن نایین است که آن را به دورهٔ پارتیان یا ساسانیان نسبت می‌دهند. حمدالله مستوفی نوشته است که دیوار قلعهٔ نایین چهار هزار گام بود. امروز از آن دیوارها و طاق‌های خشتی باقی مانده و گرداگردش خندق و بافت قدیم شهر است.',
k:'نارین‌قلعه یادآور آن است که تاریخ نایین به پیش از اسلام می‌رسد، حتی اگر مدرک مکتوب کمی از آن مانده باشد.',
p:['غروب بهترین نور را برای عکاسی دارد.','کفش راحت بپوشید؛ مسیر ناهموار است.','به بنای خشتی آسیب نزنید؛ میراث همهٔ ماست.']},
{id:'mohammadiyeh',n:1,t:'مسجد جامع محمدیه',tag:'ثبت‌شده در فهرست آثار ملی',a:'mosque',q:'مسجد جامع محمدیه نایین',
f:[['محل','محمدیه، نایین'],['دوران','قرن دهم تا یازدهم'],['ثبت','فهرست آثار ملی'],['تعمیر','۱۶۲۶ میلادی']],
d:'مسجد جامع محمدیه در روستای محمدیهٔ نایین است و در فهرست آثار ملی ایران ثبت شده است. پایهٔ اولیهٔ آن را به سدهٔ چهارم هجری و بازسازی بزرگش را به دورهٔ صفوی نسبت می‌دهند.',
k:'اگر به نایین می‌روید، یک روز را برای گشتن در روستاهای تاریخی اطراف هم بگذارید.',
p:['ساعت بازدید را از میراث فرهنگی شهرستان بپرسید.']},
{id:'bazaar',n:3,t:'بازار تاریخی',tag:'اقتصاد و زندگی شهری',a:'bazaar',q:'بازار تاریخی نایین',
f:[['محل','بافت قدیم'],['مصالح','آجر و خشت'],['خرید','قالی، عبا، سوغات'],['بهترین زمان','صبح']],
d:'بازار قدیم نایین با سقف‌های آجری و راسته‌های باریک، نمونهٔ بازار سنتی ایرانی است؛ جایی که تجارت، گفت‌وگو و همسایگی کنار هم شکل گرفته‌اند. هنوز هم می‌توان در آن از صنعتگران محلی خرید کرد.',
k:'در گذشته نایین به معدن‌های نقره و کائولن (خاک چینی) شهرت داشت و کائولن آن در دورهٔ صفوی برای ساخت ظروف چینی به کاشان می‌رفت.',
p:['خرید از صنعتگر محلی به معیشت خانواده‌ها کمک می‌کند.','هنگام خرید قالی از اصالت و نشان تولید بپرسید.']},
 {id:'pirnia',n:3,t:'خانهٔ تاریخی پیرنیا',tag:'موزهٔ مردم‌شناسی کویر',a:'house',q:'خانه پیرنیا نایین',
f:[['نوع','خانهٔ تاریخی'],['امروز','موزهٔ مردم‌شناسی'],['خاندان','پیرنیا'],['به فرهنگ و هنر','۱۳۴۳']],
d:'خانهٔ پیرنیا یکی از مهم‌ترین خانه‌های تاریخی نایین و نزدیک مسجد جامع است. معماری آن از خانه‌های کویر مرکزی ایران الهام گرفته است. در دورهٔ قاجار خاندان پیرنیا در آن ساکن بودند و میرزا احمدخان پیرنیا، حاکم نایین، در آن زندگی کرد. امروز موزهٔ مردم‌شناسی کویر در آن است.',
k:'این خانه در سال ۱۳۴۳ در اختیار وزارت فرهنگ و هنر قرار گرفت و امروز نمایندگی میراث فرهنگی نایین هم در آن است.',
p:['ساعت بازدید را پیش از رفتن بپرسید.','به گچ‌بری‌ها، نورگیرها و حیاط باغچه‌دار دقت کنید.']},
{id:'water',n:2,t:'آب‌انبارهای نایین',tag:'هنر مهار آب در کویر',a:'water',q:'آب انبار معصوم خانی نایین',
f:[['مشهورترین','معصوم‌خانی'],['دیگران','حاجی حسین، فیض، ابوالحسن'],['اقلیم','گرم و خشک'],['کاربرد','ذخیرهٔ آب آشامیدنی']],
d:'می‌گویند کمتر شهری به اندازهٔ نایین آب‌انبار دارد. مردم در شهر کویری، آب را در آب‌انبارهای گنبددار نگه می‌داشتند. معصوم‌خانی معروف‌ترین آنهاست و آب‌انبارهای حاجی حسین، ابوالحسن، فیض (محلهٔ پنجاهه)، سکان (محلهٔ باب‌المسجد) و آب‌انبار دوقلوی محمدیه هم در شهر هستند.',
k:'«باغ مصلی» که آرامگاه خاندان پیرنیا در آن است، یکی از آب‌انبارهای نایین را هم کنار خودش دارد.',
p:['بعضی آب‌انبارها بازدید شبانه‌روزی ندارند؛ پیش از رفتن بپرسید.','در گشتن میان محله‌ها، پیاده‌روی بهترین راه است.']},
{id:'houses',n:2,t:'خانه‌های تاریخی',tag:'امامی و فاطمی',a:'house',q:'خانه تاریخی امامی نایین',
f:[['خانهٔ امامی','دورهٔ صفوی، محلهٔ کلوان'],['خانهٔ فاطمی','محلهٔ نوآباد'],['دیگر','دورهٔ قاجار'],['ویژگی','حیاط، بهارخواب']],
d:'خانهٔ امامی در محلهٔ کلوان از دورهٔ صفوی است و در دورهٔ قاجار تغییراتی داشته؛ خانوادهٔ امامی، امام جمعهٔ شهر، در آن زندگی می‌کردند. خانهٔ فاطمی نزدیک بازار در محلهٔ نوآباد است و دالان، بهارخواب، مطبخ، حمام و اتاق مهمان دارد.',
k:'در معماری سنتی نایین، خانه به سمت حیاط باز می‌شد و بهارخواب و زیرزمین برای فصل‌های مختلف بود.',
p:['برای دیدن داخل خانه‌ها ساعت بازدید را جویا شوید.']},
{id:'hammam',n:2,t:'حمام قدیمی نوآباد',tag:'حمام تاریخی قاجاری',a:'water',q:'حمام قدیمی نوآباد نایین',
f:[['دوران','قاجار'],['محله','نوآباد'],['ثبت ملی','۲۴ اسفند ۱۳۸۳'],['ورود','رایگان']],
d:'حمام قدیمی نوآباد از قدیمی‌ترین و بزرگ‌ترین حمام‌های تاریخی نایین است و به دورهٔ قاجار برمی‌گردد. کنار حسینیهٔ نوآباد و نزدیک میدانچهٔ همان محله است و در سال ۱۳۸۳ در فهرست آثار ملی ایران ثبت شد.',
k:'حمام در شهرهای قدیم ایران فقط جای شست‌وشو نبود؛ جای دیدار و گفت‌وگوی اهل محله هم بود.',
p:['بازدید معمولاً کمتر از یک ساعت وقت می‌گیرد.','پیش از رفتن از میراث فرهنگی نایین وضعیت بازدید را بپرسید.']},
{id:'mosalla',n:2,t:'باغ مصلی',tag:'آرامگاه خاندان پیرنیا',a:'mosque',q:'باغ مصلی نایین',
f:[['بنا','آرامگاه با گنبد فیروزه‌ای'],['مصالح','آجر و کاشی'],['محوطه','باغ و حوض'],['مجاور','آب‌انبار']],
d:'باغ مصلی در نایین آرامگاه خاندان پیرنیا است. بنای آجری هشت‌ضلعی‌مانند آن با گنبدی فیروزه‌ای و نقش‌های زرد، در میان درختان سرو و کاج و کنار حوضی کوچک قرار دارد.',
k:'یکی از آب‌انبارهای نایین کنار باغ مصلی است.',
p:['ساعت بازدید را پیش از رفتن بپرسید.','محوطه آرام است؛ سکوت و نظم را رعایت کنید.']},
{id:'ashura',n:2,t:'قلعهٔ عاشوراگاه',tag:'دژ خشتی در دل کویر',a:'castle',q:'قلعه عاشوراگاه نایین',
f:[['مصالح','خشت و گل'],['ساختار','برج و باروی گرد'],['ورود','پیش از رفتن بپرسید'],['بهترین زمان','غروب']],
d:'قلعهٔ عاشوراگاه از بناهای خشتی اطراف نایین است. برج‌های گرد و دیوارهای گلی آن در دل دشت کویری دیده می‌شود.',
k:'بناهای خشتی به باران و باد حساس‌اند؛ با نگهداری و رعایت بازدیدکنندگان می‌مانند.',
p:['به دیوارها و برج‌های خشتی آسیب نزنید.','آب و کلاه همراه داشته باشید.']},
{id:'bafran',n:5,t:'شهر بافران و مسجد جامع',tag:'یادگار دورهٔ سلجوقی',a:'mosque',q:'مسجد جامع بافران نایین',
f:[['فاصله','۸ کیلومتری نایین'],['دوران','سلجوقی'],['ثبت ملی','۲۵ خرداد ۱۳۸۱'],['مناره','خشتی و گرد']],
d:'بافران روستایی حدود هشت کیلومتری جنوب‌شرق نایین است. مهم‌ترین بنای آن مسجد جامع بافران است که مناره‌ای خشتی و گرد دارد و آن را از دورهٔ سلجوقی می‌دانند. این مسجد در سال ۱۳۸۱ با شمارهٔ ۵۸۸۷ ثبت ملی شد و در کوچه‌پس‌کوچه‌های تاریخی روستا قرار دارد. قلعهٔ خشتی و قدمگاه بافران هم در همین روستا دیده می‌شوند.',
k:'برخی پژوهشگران می‌گویند مسجد در آغاز محراب نداشته و محراب آن بعدها ساخته شده است.',
p:['از کمربندی نایین وارد جادهٔ نایین به اردکان شوید.','در کوچه‌های روستا آرام و پیاده بگردید.']},
{id:'nature',n:0,t:'روستاها و طبیعت اطراف',tag:'سفر کوتاه از نایین',a:'nature',q:'روستای مشکنان نایین',
f:[['روستاها','مشکنان، بادافشان'],['طبیعت','غار اژدها'],['منطقه','شکارممنوع عباس‌آباد'],['بهترین زمان','بهار و پاییز']],
d:'اطراف نایین روستاهای تاریخی و جاذبه‌های طبیعی دارد؛ مثل روستای مشکنان، بادافشان، غار اژدها و منطقهٔ شکارممنوع عباس‌آباد. اگر یک روز بیشتر وقت دارید، دیدن آنها سفر شما را کامل می‌کند.',
k:'نایین را برای دیدن کویر و تاریخ می‌شود هم‌زمان در یک سفر دید.',
p:['برای جاده‌های خارج شهر آب و سوخت کافی همراه داشته باشید.','مسیر و ساعت را از میراث فرهنگی بپرسید.']}];
const CAP={"hammam":["فضای داخلی حمام قدیمی نوآباد","خزینه و سکوها در حمام"],"bafran":["مناره و نمای مسجد جامع بافران","مسجد جامع بافران و مناره در نور غروب","قلعهٔ خشتی بافران بر فراز صخره","باروی قلعهٔ بافران زیر آسمان کویر","قدمگاه بافران و قلعهٔ پشت آن"],"water":["گنبدهای آب‌انبار و بادگیرها","آب‌انبار آجری با بادگیر"],"mosalla":["آرامگاه با گنبد فیروزه‌ای در باغ مصلی","نمای آرامگاه و ورودی‌ها"],"ashura":["نمای قلعهٔ عاشوراگاه بالای بافت قدیم","دید هوایی برج‌ها و باروی قلعه"],"houses":["حیاط خانهٔ فاطمی با حوض و ایوان‌ها","نمای حیاط و ایوان‌های خانهٔ فاطمی"],"nature":[],"mosque":["نمای مسجد جامع و مناره","مسجد جامع نایین در نور غروب"],"narin": ["نارین\u200cقلعه هنگام غروب", "دیوارها و طاق\u200cهای خشتی نارین\u200cقلعه"], "mohammadiyeh": ["کتیبه\u200cهای خطی زیر گنبدچهٔ مسجد محمدیه"], "bazaar": ["راسته\u200cای از بازار قدیم نایین", "نور از روزنه\u200cهای سقف بازار", "دکان\u200cهای چوبی بازار"], "pirnia": ["حیاط آجری خانهٔ تاریخی", "نمای حیاط و ارسی\u200cها", "گچ\u200cبری و حیاط\u200cباغچه"]};

const gmap=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const QZ=[
['نایین در کدام استان است؟',['اصفهان','یزد','کرمان','فارس'],0],
['نارین‌قلعه عمدتاً از چه ساخته شده است؟',['سنگ و ساروج','خشت و گل','فولاد','بتن'],1],
['مسجد جامع نایین یادگار کدام دوره است؟',['معاصر','سده‌های آغازین اسلامی','قاجار','صفوی'],1],
['کدام هنر از شاخص‌ترین هنرهای نایین است؟',['قالی‌بافی','شیشه‌گری','میناکاری','قلمزنی'],0],
['بهترین فصل‌ها برای سفر به نایین کدام‌اند؟',['تابستان و زمستان','بهار و پاییز','فقط تابستان','فقط زمستان'],1],
['کائولن نایین در دورهٔ صفوی در کاشان برای ساخت چه چیزی به کار می‌رفت؟',['ظروف چینی','شیشه','آجر','نقاشی'],0],
['ورود به نارین‌قلعه چگونه است؟',['رایگان','با بلیت گران','فقط با مجوز ویژه','ممنوع'],0],
['خانهٔ پیرنیا امروز چه کاربری دارد؟',['موزهٔ مردم‌شناسی کویر','بانک','مدرسه','هتل'],0],
['کدام آب‌انبار نایین از همه معروف‌تر است؟',['معصوم‌خانی','سکان','تگو','نوگاباد'],0]];

let qi=0,qs=0,ans=false;
const $=id=>document.getElementById(id),app=$('app');

/* —— شهرستان‌های استان (نایین کامل، بقیه با بخش‌های اختصاصی) —— */
const CITIES={
nain:{id:'nain',t:'نایین',tag:'پوشش کامل · جاذبه و برنامه و آزمون',desc:'مسجد جامع کهن، نارین‌قلعه، بازار زنده، قالی و عبا',color:'#157A82'},
kashan:{id:'kashan',t:'کاشان',tag:'باغ · خانه · سفال و گلاب',desc:'باغ فین، خانه‌های طباطبایی و بروجردی، تپه سیلک، سفال و فرش',color:'#8B4513'},
natanz:{id:'natanz',t:'نطنز',tag:'کوه · زیارت · ابیانه',desc:'آرامگاه شیخ عبدالصمد، مسجد جامع، ابیانه، قله کرکس',color:'#2E7D32'},
ardestan:{id:'ardestan',t:'اردستان',tag:'مسجد · قنات · کویر',desc:'مسجد جامع دو ایوانی، قنات‌های کهن، بافت خشتی',color:'#6A1B9A'}
};

function slider(a){return`<div class="sl"><div class="sl-t">${a.map(x=>`<figure><img src="${x.src}" alt="${x.cap}" loading="lazy"><figcaption>${x.cap}</figcaption></figure>`).join('')}</div><button class="sl-b p" aria-label="قبلی">›</button><button class="sl-b n" aria-label="بعدی">‹</button><div class="sl-d">${a.map(()=>'<i></i>').join('')}</div></div>`}
function imgs(s){return Array.from({length:s.n},(_,i)=>({src:`img/${s.id}-${i+1}.jpg`,cap:CAP[s.id][i]}))}
function pic(s){return s.n?slider(imgs(s)):`<div class="art">${ART[s.a]}</div>`}
function gal(ids){return S.filter(s=>ids.includes(s.id)).flatMap(s=>imgs(s).map(x=>({id:s.id,src:x.src,cap:s.t+' · '+x.cap})))}
function allImgs(){return gal(S.map(s=>s.id))}
function ring(a){return`<div class="ring3d"><div class="rg">${a.map(x=>`<a class="rc" href="#sight-${x.id}"><img src="${x.src}" alt="${x.cap}"><span>${x.cap}</span></a>`).join('')}</div></div><p class="hint">برای چرخاندن، انگشت یا ماوس را بکشید</p>`}
let raf=0;
function initRing(){cancelAnimationFrame(raf);const r=document.querySelector('.rg');if(!r)return;const n=r.children.length,R=Math.round(65/Math.tan(Math.PI/n))+10,box=r.parentNode;let a=0,drag=false,x0=0,mv=0;
[...r.children].forEach((c,i)=>c.style.transform=`rotateY(${i*360/n}deg) translateZ(${R}px)`);
box.onpointerdown=e=>{drag=true;mv=0;x0=e.clientX};box.onpointermove=e=>{if(drag){const d=e.clientX-x0;mv+=Math.abs(d);a+=d*.45;x0=e.clientX}};box.onpointerup=box.onpointerleave=()=>drag=false;
box.onclick=e=>{if(mv>6)e.preventDefault()};const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
let last=0;const SPEED=.005;/* درجه بر میلی‌ثانیه ≈ ۵ درجه در ثانیه */
const t=ts=>{const dt=last?Math.min(ts-last,50):16;last=ts;if(!drag&&!rm)a+=dt*SPEED;r.style.transform=`translateZ(-${R}px) rotateY(${a}deg)`;raf=requestAnimationFrame(t)};t(performance.now())}
function initTilt(){app.onpointermove=e=>{if(e.pointerType==='touch')return;const t=e.target.closest('.tilt');if(!t)return;const b=t.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;t.style.transform=`perspective(700px) rotateX(${-y*8}deg) rotateY(${x*10}deg) translateZ(6px)`};app.onpointerout=e=>{const t=e.target.closest&&e.target.closest('.tilt');if(t)t.style.transform=''}}
let timers=[];
function initSliders(){timers.forEach(clearInterval);timers=[];document.querySelectorAll('.sl').forEach(el=>{const t=el.querySelector('.sl-t'),d=el.querySelectorAll('.sl-d i'),n=d.length;let i=0,x0=0;
const show=k=>{i=(k+n)%n;t.style.transform=`translateX(${i*100}%)`;d.forEach((e,j)=>e.classList.toggle('on',j===i))};show(0);
el.querySelector('.p').onclick=()=>{show(i-1);rst()};el.querySelector('.n').onclick=()=>{show(i+1);rst()};
el.ontouchstart=e=>x0=e.touches[0].clientX;el.ontouchend=e=>{const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){show(dx>0?i+1:i-1);rst()}};
let id;const rst=()=>{clearInterval(id);if(!matchMedia('(prefers-reduced-motion:reduce)').matches){id=setInterval(()=>show(i+1),4500);timers.push(id)}};rst()})}

function rw(s){return`<a class="row" href="#sight-${s.id}"><span class="ico">${ART[s.a]||ART.mosque}<img src="img/${s.id}-1.jpg" alt="" loading="lazy" onerror="this.remove()"></span><div><strong>${s.t}</strong><span>${s.tag}</span></div></a>`}

function cityCard(c,full){
  const href = c.id==='nain' ? '#nain' : '#city-'+c.id;
  const badge = full ? '<span class="badge">کامل</span>' : '<span class="badge soft">بخش‌های اختصاصی</span>';
  // عکس واقعی برای همه شهرها
  const thumbs={
    nain:'img/mosque-1.jpg',
    kashan:'img/kashan-1.jpg',
    natanz:'img/natanz-1.jpg',
    ardestan:'img/ardestan-1.jpg'
  };
  const thumb=thumbs[c.id]||'img/mosque-1.jpg';
  const media=`<div class="city-photo"><img src="${thumb}" alt="${c.t}" loading="lazy"></div>`;
  return `<a class="city" href="${href}" style="--cc:${c.color}"><div class="city-top"><strong>${c.t}</strong>${badge}</div>${media}<p>${c.desc}</p><span class="city-tag">${c.tag}</span></a>`;
}

const page={
/* صفحهٔ اصلی: استان اصفهان */
home(){return['اصفهان‌گرد',`
<div class="nat"><b>استان اصفهان</b><br>معرفی ظرفیت‌های فرهنگی و تاریخی شهرستان‌ها — نایین با پوشش کامل؛ کاشان، نطنز و اردستان با بخش‌های اختصاصی.</div>
<h2>شهرستان‌ها</h2>
${cityCard(CITIES.nain,true)}
${cityCard(CITIES.kashan,false)}
${cityCard(CITIES.natanz,false)}
${cityCard(CITIES.ardestan,false)}
<a class="btn alt" href="#about-app">دربارهٔ این نرم‌افزار</a>
`]},

/* هاب نایین (محتوای کامل قبلی) */
nain(){return['نایین',`
<div class="nat"><b>نایین</b><br>سفری به دل تاریخ ایران اسلامی؛ از مسجد کهن تا قلعه خشتی و بازار زنده.</div>
<h2>گالری سه‌بعدی نایین</h2>${ring(allImgs())}
<h2>از کجا شروع کنیم؟</h2>
${S.slice(0,3).map(rw).join('')}
<a class="btn alt" href="#sights">همهٔ جاذبه‌ها</a>
<a class="btn alt" href="#trip">برنامهٔ یک‌روزهٔ سفر</a>
<a class="btn alt" href="#more">موضوعات بیشتر</a>
<div class="nat"><b>نایین در ایران اسلامی</b><br>ببینید میراث نایین چه نقشی در هویت ایرانی ـ اسلامی و اقتصاد مقاومتی دارد.</div>
<a class="btn" href="#iran">بخوانید</a>
<a class="btn alt" href="#about">دربارهٔ نایین</a>
<a class="btn alt" href="#quiz">آزمون آشنایی با نایین</a>
<a class="btn alt" href="#home">بازگشت به استان</a>
`]},

sights(){return['جاذبه‌های نایین','<h2>جاذبه‌های نایین</h2>'+slider(allImgs())+S.map(rw).join('')+'<a class="btn alt" href="#nain">بازگشت به نایین</a>']},

sight(id){const s=S.find(x=>x.id===id);if(!s)return page.nain();return[s.t,`${pic(s)}<span class="tag">${s.tag}</span><div class="facts">${s.f.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div><div class="card">${s.d}</div><div class="nat"><b>آیا می‌دانید؟</b><br>${s.k}</div><div class="card"><h3>نکتهٔ بازدید</h3><ul class="tips">${s.p.map(x=>`<li>${x}</li>`).join('')}</ul></div><a class="btn" href="${gmap(s.q)}" target="_blank" rel="noopener">مشاهده روی نقشه</a><a class="btn alt" href="#sights">جاذبه‌های دیگر</a>`]},

more(){return['موضوعات بیشتر',`<h2>بیشتر از نایین بدانید</h2>
<a class="row" href="#sight-water"><span class="ico">${ART.water}</span><div><strong>آب‌انبارهای نایین</strong><span>هنر مهار آب در کویر</span></div></a>
<a class="row" href="#sight-houses"><span class="ico">${ART.house}</span><div><strong>خانه‌های تاریخی</strong><span>امامی و فاطمی</span></div></a>
<a class="row" href="#sight-nature"><span class="ico">${ART.nature}</span><div><strong>روستاها و طبیعت اطراف</strong><span>مشکنان، بادافشان، غار اژدها</span></div></a>
<a class="row" href="#sight-hammam"><span class="ico">${ART.water}</span><div><strong>حمام قدیمی نوآباد</strong><span>حمام تاریخی قاجاری</span></div></a>
<a class="row" href="#sight-bafran"><span class="ico">${ART.mosque}</span><div><strong>شهر بافران</strong><span>مسجد جامع سلجوقی</span></div></a>
<a class="row" href="#crafts"><span class="ico">${ART.bazaar}</span><div><strong>هنر و صنایع دستی</strong><span>قالی و عبا</span></div></a>
<a class="row" href="#guide"><span class="ico">${ART.star}</span><div><strong>راهنمای سفر</strong><span>زمان، مسیر، نکته‌ها</span></div></a>
<div class="card"><h3>دیگر دیدنی‌ها</h3>باغ مصلی، حمام قدیمی کلوان، مسجد شیخ مغربی، مسجد خواجه خضر و قلعهٔ عاشوراگاه.</div>
<a class="btn alt" href="#nain">بازگشت به نایین</a>`]},

trip(){const st=[['۸:۰۰','مسجد جامع نایین','نور صبح برای عکاسی و آرامش مسجد بهتر است.','mosque'],['۹:۳۰','خانهٔ پیرنیا و موزهٔ کویر','گشتی در حیاط و موزهٔ مردم‌شناسی.','pirnia'],['۱۱:۰۰','بازار قدیم','قالی و عبا را از نزدیک ببینید.','bazaar'],['۱۳:۰۰','ناهار و استراحت','در ظهر گرم، سایه و آب را فراموش نکنید.',''],['۱۶:۰۰','آب‌انبار معصوم‌خانی','مشهورترین آب‌انبار شهر.','water'],['۱۷:۳۰','نارین‌قلعه در غروب','پایان زیبای روز.','narin']];
return['برنامهٔ یک‌روزه',`<h2>یک روز در نایین</h2><div class="tl">${st.map(([tm,ti,d,id])=>`<div class="st"><time>${tm}</time><div class="card"><b>${id?`<a href="#sight-${id}">${ti}</a>`:ti}</b><br>${d}</div></div>`).join('')}</div><a class="btn alt" href="#nain">بازگشت</a>`]},

about(){return['دربارهٔ نایین',`<h2>نایین در یک نگاه</h2>
<div class="card">نایین در شرق استان اصفهان، در حاشیهٔ کویر مرکزی ایران قرار دارد. بافت تاریخی، خانه‌های خشتی، بازار سرپوشیده و بناهای سده‌های نخستین اسلامی، این شهر را به یکی از غنی‌ترین شهرستان‌های فرهنگی استان تبدیل کرده است.</div>
<div class="facts"><div><small>قدمت</small><b>بیش از ۱۲۰۰ سال</b></div><div><small>استان</small><b>اصفهان</b></div><div><small>مشهور به</small><b>قالی و عبا</b></div><div><small>شاخص</small><b>مسجد جامع و نارین</b></div></div>
<a class="btn alt" href="#nain">بازگشت به نایین</a>`]},

iran(){return['ایران اسلامی',`<h2>نایین در هویت ایرانی ـ اسلامی</h2>
<div class="card"><h3>ایران، پیش و پس از اسلام</h3>نارین‌قلعه از تاریخ کهن ایران و مسجد جامع از دوران اسلامی سخن می‌گویند؛ نایین جایی است که این دو لایهٔ هویت ما کنار هم دیده می‌شود.</div>
<div class="card"><h3>حفظ میراث فرهنگی</h3>بناهای تاریخی نایین زیر نظر میراث فرهنگی کشور حفاظت می‌شوند؛ مسجد جامع نایین از سال ۱۳۱۰ در فهرست آثار ملی ایران است. هر گردشگر با رعایت نکات بازدید، در این امانت‌داری سهم دارد.</div>
<div class="nat"><b>اقتصاد مقاومتی</b><br>خرید قالی و عبای دست‌باف نایین، یعنی حمایت از تولید ملی و کارگاه‌های خانوادگی؛ همان شعار «کالای ایرانی بخریم» در عمل.</div>
<div class="card"><h3>وحدت و مهمان‌نوازی</h3>گردشگری داخلی، مردم شهرهای مختلف ایران را به هم نزدیک می‌کند و مهمان‌نوازی ایرانی را به نمایش می‌گذارد.</div>
<a class="btn alt" href="#nain">بازگشت</a>`]},

crafts(){return['هنر و صنایع دستی',`<h2>هنر دست نایینی‌ها</h2>
<div class="card"><h3>قالی نایین</h3>گره‌های ریز، نقشه‌های متقارن و رنگ‌های آرام (آبی، کرم و سرمه‌ای) قالی نایین را در ایران و جهان شناخته کرده است. <b>هر قالی ماه‌ها کار یک خانواده است.</b></div>
<div class="card"><h3>عبابافی</h3>عبا از صنایع دستی قدیمی نایین است که با نخ و دستگاه سنتی بافته می‌شود و هنوز در کارگاه‌های کوچک ادامه دارد.</div>
<div class="card"><h3>سوغات</h3>قالی و فرش‌پاره، عبا و شیرینی‌های محلی بهترین سوغات سفر شما هستند.</div>
<div class="nat">با هر خرید از صنعتگر ایرانی، یک هنر زنده می‌ماند و یک خانواده امیدوارتر می‌شود.</div>
<a class="btn alt" href="#nain">بازگشت</a>`]},

guide(){return['راهنمای سفر',`<h2>راهنمای سفر به نایین</h2>${slider(allImgs())}<div class="card"><ul class="tips"><li><b>زمان:</b> بهار و پاییز بهترین زمان است؛ تابستان گرم و زمستان سرد است.</li><li><b>مسیر:</b> نایین حدود ۱۵۰ کیلومتری شرق اصفهان است و از اصفهان و یزد با خودرو و اتوبوس می‌توان رفت.</li><li><b>همراه داشته باشید:</b> آب، کلاه و کفش راحت.</li><li><b>رفتار گردشگر:</b> در مسجد و بناهای تاریخی پوشش و آرامش را رعایت کنید و زباله نریزید.</li></ul></div><a class="btn" href="#sights">دیدن جاذبه‌ها</a>`]},

quiz(){if(qi>=QZ.length){const r=qs;return['آزمون',`<h2>نتیجهٔ شما</h2><div class="nat" style="text-align:center;font-size:18px"><b>${r} از ${QZ.length}</b><br>${r>=4?'عالی! شما نایین را خوب می‌شناسید.':'خوب بود! با خواندن جاذبه‌ها دوباره امتحان کنید.'}</div><button class="btn" onclick="qi=0;qs=0;go()">شروع دوباره</button><a class="btn alt" href="#sights">خواندن جاذبه‌ها</a>`]}
const q=QZ[qi];return['آزمون',`<div class="bar2"><i style="width:${(qi/QZ.length)*100}%"></i></div><h2>سؤال ${qi+1} از ${QZ.length}</h2><div class="card"><b>${q[0]}</b>${q[1].map((o,i)=>`<button class="opt" onclick="pick(${i},this)">${o}</button>`).join('')}</div>`]},

/* صفحات شهرستان‌های دیگر — عکس واقعی فقط برای جاذبه‌هایی که داریم */
city(id){
  const data={
    kashan:{
      t:'کاشان',
      intro:'کاشان یکی از غنی‌ترین شهرستان‌های فرهنگی استان اصفهان است؛ از باغ فین تا خانه‌های اعیانی دورهٔ قاجار و تپهٔ باستانی سیلک.',
      items:[
        ['img/kashan-fin.jpg','باغ فین','از معروف‌ترین باغ‌های ایرانی؛ محل قتل امیرکبیر و نمونه‌ای کامل از باغ ایرانی'],
        ['img/kashan-tabatabai.jpg','خانهٔ طباطبایی‌ها','نماد معماری مسکونی کاشان با حیاط‌های گودال‌باغچه و ارسی‌های رنگی'],
        ['img/kashan-borujerdi.jpg','خانهٔ بروجردی‌ها','گنبد و بادگیرهای چشمگیر؛ یکی از زیباترین خانه‌های تاریخی ایران'],
        ['img/kashan-sialk.jpg','تپه سیلک','از کهن‌ترین سکونتگاه‌های فلات ایران با قدمتی بیش از هفت هزار سال'],
        ['img/kashan-bazaar.jpg','بازار کاشان','بازار زنده با کارگاه‌های سنتی و عطر ادویه و گلاب'],
        ['img/kashan-hammam.jpg','حمام سلطان امیراحمد','از زیباترین حمام‌های تاریخی با کاشی‌کاری و گچ‌بری'],
        ['img/kashan-niasar.jpg','نیاسر و آتشکده','چشمه‌سار و آتشکدهٔ ساسانی در نزدیکی شهر']
      ],
      crafts:[
        [null,'فرش کاشان','از مشهورترین فرش‌های ایران با نقش‌های گل و بته'],
        [null,'سفال و سرامیک','سنت دیرینهٔ سفالگری که هنوز زنده است'],
        [null,'گلاب و عرقیات','کاشان پایتخت گلاب ایران؛ مزارع گل محمدی در بهار']
      ],
      tips:[
        ['بهترین زمان','بهار (مخصوصاً اردیبهشت برای جشنواره گل) و پاییز'],
        ['مسیر','حدود ۲۲۰ کیلومتر از اصفهان؛ در مسیر یزد و نایین'],
        ['پیشنهاد','ترکیب بازدید باغ فین، خانه‌های تاریخی و خرید از بازار']
      ],
      note:'کاشان با ترکیب باغ ایرانی، معماری مسکونی و صنایع دستی، یکی از کامل‌ترین مقاصد فرهنگی استان اصفهان است.',
      gallery:['img/kashan-fin.jpg','img/kashan-tabatabai.jpg','img/kashan-borujerdi.jpg','img/kashan-hammam.jpg','img/kashan-bazaar.jpg','img/kashan-sialk.jpg','img/kashan-niasar.jpg']
    },
    natanz:{
      t:'نطنز',
      intro:'نطنز در دامنهٔ کوه کرکس، ترکیبی از زیارت، باغ و معماری کوهستانی است. روستای ابیانه در همین شهرستان قرار دارد.',
      items:[
        ['img/natanz-samad.jpg','آرامگاه شیخ عبدالصمد','مجموعهٔ تاریخی با گنبد فیروزه‌ای و مناره‌های زیبا'],
        ['img/natanz-jameh.jpg','مسجد جامع نطنز','معماری ایلخانی و صفوی با تزئینات آجری و کاشی'],
        ['img/natanz-abyaneh.jpg','ابیانه','روستای سرخ‌رنگ و تاریخی در دامنهٔ کرکس؛ معماری منحصربه‌فرد'],
        ['img/natanz-karkas.jpg','قله کرکس','جاذبهٔ طبیعی و مقصد کوهنوردی و طبیعت‌گردی'],
        [null,'باغ‌های میوه','گردو، زردآلو، انار و باغ‌های سنتی کوهپایه'],
        [null,'چشمه و آبشارها','مناطق ییلاقی و چشمه‌های طبیعی اطراف'],
        [null,'بازار سنتی نطنز','محصولات محلی و صنایع دستی کوهستانی']
      ],
      crafts:[
        [null,'صنایع چوبی','ساخت اشیای چوبی و منبت‌کاری سنتی'],
        [null,'فرش و گلیم','بافت‌های محلی با نقش‌های ساده و طبیعی'],
        [null,'محصولات باغی','خشکبار، عسل و محصولات ارگانیک منطقه']
      ],
      tips:[
        ['بهترین زمان','بهار و تابستان برای کوهستان؛ پاییز برای رنگ‌های پاییزی ابیانه'],
        ['مسیر','حدود ۱۴۰ کیلومتر از اصفهان به سمت شمال'],
        ['پیشنهاد','بازدید مجموعه شیخ عبدالصمد + یک روز در ابیانه']
      ],
      note:'نطنز حلقهٔ اتصال طبیعت کوهستانی و میراث مذهبی استان اصفهان است و برای دوستداران طبیعت و تاریخ ایده‌آل است.',
      gallery:['img/natanz-abyaneh.jpg','img/natanz-samad.jpg','img/natanz-jameh.jpg','img/natanz-karkas.jpg']
    },
    ardestan:{
      t:'اردستان',
      intro:'اردستان با مسجد جامع دو ایوانی منحصربه‌فرد و قنات‌های کهن، نمونهٔ روشنی از زندگی در حاشیهٔ کویر است.',
      items:[
        ['img/ardestan-mosque.jpg','مسجد جامع اردستان','از معدود مساجد دو ایوانی ایران با معماری سلجوقی و ایلخانی'],
        [null,'قنات‌های کهن','نمونهٔ مهندسی آب در مناطق خشک؛ برخی هنوز فعال‌اند'],
        [null,'بافت تاریخی خشتی','کوچه‌ها و خانه‌های کویری با بادگیر و حیاط مرکزی'],
        [null,'زیارتگاه‌ها','بقاع متبرکه و مراسم محلی محرم و مناسبت‌های مذهبی'],
        [null,'آب‌انبارها','سازه‌های سنتی ذخیره آب در حاشیهٔ کویر'],
        [null,'کاروانسراها','یادگار مسیرهای تجاری قدیم'],
        [null,'مناظر کویری','غروب و آسمان پرستاره در اطراف شهر']
      ],
      crafts:[
        [null,'قالی و گلیم','بافت سنتی با نقش‌های محلی'],
        [null,'صنایع خشتی و سفالی','تداوم معماری و هنر کویری'],
        [null,'محصولات کشاورزی','پسته، انار و محصولات مقاوم به خشکی']
      ],
      tips:[
        ['بهترین زمان','پاییز و زمستان؛ بهار معتدل'],
        ['مسیر','شرق استان اصفهان؛ نزدیک به نایین و مسیرهای کویری'],
        ['پیشنهاد','بازدید مسجد جامع + قدم‌زدن در بافت تاریخی و قنات‌ها']
      ],
      note:'اردستان تصویر زنده‌ای از ظرفیت‌های کویری و تاریخی شرق استان اصفهان است و مکمل خوبی برای سفر به نایین به‌شمار می‌رود.',
      gallery:['img/ardestan-mosque.jpg','img/ardestan-mosque2.jpg','img/ardestan-mosque3.jpg']
    }
  };
  const c=data[id];
  if(!c) return page.home();
  const row=(src,t,d)=>{
    const ico=src
      ?`<span class="ico"><img src="${src}" alt="" loading="lazy"></span>`
      :`<span class="ico" style="background:var(--tile);display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px">◇</span>`;
    return`<div class="row" style="pointer-events:none">${ico}<div><strong>${t}</strong><span>${d}</span></div></div>`;
  };
  const list=c.gallery||[];
  const pics=list.map((src,i)=>`<figure style="margin:0"><img src="${src}" alt="${c.t}" loading="lazy" style="width:100%;display:block;border-radius:14px"><figcaption style="text-align:center;font-size:12px;color:var(--muted);padding:6px 0">${c.t}</figcaption></figure>`).join('');
  return[c.t,`
<div class="nat"><b>${c.t}</b><br>${c.intro}</div>
${list.length?`<div class="sl" style="margin-bottom:4px"><div class="sl-t">${pics}</div><button class="sl-b p" aria-label="قبلی">›</button><button class="sl-b n" aria-label="بعدی">‹</button><div class="sl-d">${list.map(()=>'<i></i>').join('')}</div></div>`:''}
<h2>جاذبه‌های اصلی</h2>
${c.items.map(([src,t,d])=>row(src,t,d)).join('')}
<h2>صنایع دستی و سوغات</h2>
${c.crafts.map(([src,t,d])=>row(src,t,d)).join('')}
<h2>راهنمای سفر</h2>
<div class="card"><ul class="tips">${c.tips.map(([t,d])=>`<li><b>${t}:</b> ${d}</li>`).join('')}</ul></div>
<div class="nat">${c.note}</div>
<a class="btn" href="${gmap(c.t+' اصفهان')}" target="_blank" rel="noopener">مشاهده روی نقشه</a>
<a class="btn alt" href="#home">بازگشت به استان</a>
<a class="btn alt" href="#nain">دیدن نایین</a>
`]},

aboutApp(){return['دربارهٔ نرم‌افزار',`
<h2>اصفهان‌گرد</h2>
<div class="card">اصفهان‌گرد نرم‌افزاری برای معرفی ظرفیت‌های فرهنگی و تاریخی شهرستان‌های استان اصفهان است؛ با تمرکز ویژه روی نایین و بخش‌های اختصاصی برای کاشان، نطنز و اردستان.</div>
<div class="card"><h3>رویکرد</h3>
<ul class="tips">
<li><b>نایین:</b> پوشش کامل (جاذبه‌ها، برنامهٔ سفر، صنایع دستی، آزمون و نقش در هویت ایرانی ـ اسلامی)</li>
<li><b>کاشان، نطنز، اردستان:</b> جاذبه‌ها، صنایع دستی، راهنمای سفر و نکات کلیدی هر شهرستان</li>
</ul></div>
<div class="nat"><b>هدف</b><br>نشان دادن اینکه هر شهرستان استان اصفهان ظرفیت فرهنگی و تاریخی منحصربه‌فردی دارد و می‌تواند مقصد گردشگری داخلی باشد.</div>
<a class="btn alt" href="#home">بازگشت</a>
`]}
};

function pick(i,el){if(ans)return;ans=true;const ok=QZ[qi][2]===i;if(ok)qs++;el.classList.add(ok?'ok':'no');if(!ok)el.parentNode.querySelectorAll('.opt')[QZ[qi][2]].classList.add('ok');
const n=document.createElement('button');n.className='btn';n.style.marginTop='12px';n.textContent=qi===QZ.length-1?'مشاهدهٔ نتیجه':'سؤال بعدی';n.onclick=()=>{qi++;ans=false;go()};el.parentNode.appendChild(n)}

function go(){
  const h=(location.hash||'#home').slice(1);
  let k=h,a;
  if(h.startsWith('sight-')){k='sight';a=h.slice(6)}
  else if(h.startsWith('city-')){k='city';a=h.slice(5)}
  else if(h==='about-app'){k='aboutApp'}
  if(!page[k]||(k==='sight'&&!S.find(x=>x.id===a))||(k==='city'&&!['kashan','natanz','ardestan'].includes(a))){k='home'}
  if(k!=='quiz'){qi=0;qs=0;ans=false}
  const[t,html]=page[k](a);
  app.innerHTML=html+'<div class="foot">اصفهان‌گرد · ظرفیت‌های فرهنگی استان اصفهان</div>';
  $('ttl').textContent=t;
  initSliders();initRing();initTilt();
  app.querySelectorAll('.card,.row,.nat,.facts div,.city').forEach(e=>e.classList.add('tilt'));
  const isRoot = (k==='home');
  $('back').style.display=isRoot?'none':'flex';
  // back target
  let backHref='#home';
  if(k==='sight') backHref='#sights';
  else if(['sights','trip','more','about','iran','crafts','guide','quiz'].includes(k)) backHref='#nain';
  else if(k==='nain'||k==='city'||k==='aboutApp') backHref='#home';
  $('back').setAttribute('href',backHref);
  // tabs highlight
  document.querySelectorAll('.tabs a').forEach(x=>{
    let on=false;
    if(x.dataset.t==='home' && k==='home') on=true;
    if(x.dataset.t==='nain' && (k==='nain'||k==='sights'||k==='sight'||k==='trip'||k==='more'||k==='about'||k==='iran'||k==='crafts'||k==='guide')) on=true;
    if(x.dataset.t==='quiz' && k==='quiz') on=true;
    if(x.dataset.t==='cities' && (k==='city'||k==='home')) on=true;
    x.classList.toggle('on',on);
  });
  app.scrollTop=0;
}
addEventListener('hashchange',go);go();
