/**
 * ==========================================================================
 * KIRMIZI ÇARK 2 - VIP KADEMELİ SICAKLIK & UZAKTAN DÜELLO MOTORU
 * 4 Kategori: Aşk & Flört, Sıcak İtiraf, Gece & Tabu, Sanal Cesaret
 * Kademeli Isınma Sistemi: Lvl 1 (Masum Flört) -> Lvl 5 (Alev Alıyor!)
 * Her 4 Çevirişte 1 Garantili Sanal Cesaret (3 Kutu)
 * Pas Geçme & Partner Özel Komut Sistemi
 * 1. Oyuncu: Kadın, 2. Oyuncu: Erkek
 * ==========================================================================
 */

// ==========================================================================
// 1. SORU VERİTABANLARI (EĞLENCELİ KONSEPT, GÖRÜNMEZLİK & GENEL DENEYİM)
// ==========================================================================


// 💋 1. AŞK & FLÖRT (40 İlişki & Tensel Flört Dinamiği Sorusu)

const FLIRT_QUESTIONS = [
  { id: 'fl-1', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Aynı yatakta sadece 'sarılıp uyuyacağız, ileri gitmek yok' kuralı konulsa; sabah olmadan bu kuralı ilk kim, nasıl bozardı?" },
  { id: 'fl-2', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Bir ilişkide ten uyumu ve arzu biterse o ilişki sadece arkadaşlığa mı dönüşür, yoksa sevgi tek başına yürütmeye yeter mi?" },
  { id: 'fl-3', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Evde film izlerken partnerinin elinin hafifçe tişörtünün altına kayması mı, yoksa arkandan sarılıp boynuna fısıldaması mı seni daha çabuk ateşe sürükler?" },
  { id: 'fl-4', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sence kötü bir ilk öpüşme o ilişkiyi başlamadan bitirir mi, yoksa öpüşme tarzı zamanla eğitilebilir mi?" },
  { id: 'fl-5', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Dışarıda herkesin içinde aşırı ağırbaşlı ve cool duran birinin, kapalı kapılar ardında sadece seninleyken tamamen cilveli ve vahşi olması seni ne kadar çeker?" },
  { id: 'fl-6', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Gecenin 02:00'sinde karşı tarafa 'uyuyamadım...' diye ses kaydı atılsa; bu sence sadece dertleşmek için midir, yoksa bir tenin sıcaklığını özlemekten mi?" },
  { id: 'fl-7', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Tatlı bir tartışmanın hemen ardından gelen o hırslı, nefes nefese barışma yakınlaşması sence de normal bir yakınlaşmadan 10 kat daha tutkulu değil mi?" },
  { id: 'fl-8', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sevgilinin yanında giydiği o ekstra iddialı kıyafet başkalarının bakışlarını çekerken; bu sende kıskançlık mı yaratır, yoksa 'bu gece sadece benimle eve dönecek' egosu mu?" },
  { id: 'fl-9', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sabah aynı evde uyanılsa; önce kahve yapıp sohbet etmek mi, yoksa uykulu mahmurlukla yatakta birbirine dolanıp tembellik yapmak mı idealdir?" },
  { id: 'fl-10', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sence aşkı en hızlı tüketen şey ilgisizlik midir, yoksa aradaki o flört heyecanının ve gizemin sıradanlaşması mı?" },
  { id: 'fl-11', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Bir ilişkide 'bunu sadece gerçekten aşık olduğum kişiye yaparım' dediğin o en özel ya da sınırları zorlayan yakınlaşma fantezin nedir?" },
  { id: 'fl-12', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Araba kullanırken yan koltuktaki partnerinin elini bacağına koyup hafifçe yukarı doğru kaydırması sende nasıl bir tansiyon yaratır?" },
  { id: 'fl-13', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sence flörtte en dayanılmaz aşama hangisi: Henüz birbirinize dokunmadığınız ama gözlerinizle soyduğunuz o ilk haftalar mı, yoksa sınırların tamamen kalktığı an mı?" },
  { id: 'fl-14', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Biriyle tatile gidilse ve odanın kapısı kapandığı an ilk yapılacak şey konuşmak mı olurdu, yoksa bavulları bile açmadan birbirine sarılmak mı?" },
  { id: 'fl-15', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Karşı tarafın vücudunda sahiplenici tatlı bir iz bırakmak (boyun kızarıklığı, hafif tırnak izi) sana çekici gelir mi, yoksa gizli mi kalmalı?" },
  { id: 'fl-16', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sevgilinin sadece bir bakışıyla kalabalık bir ortamda 'hemen eve gitmeliyiz' mesajını vermesi sende nasıl bir yangın başlatır?" },
  { id: 'fl-17', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "İlişkide seni en çok ne baştan çıkarır: Karşı tarafın sana derin bir aşkla bağlı olması mı, yoksa her an seni yoldan çıkaracak o tehlikeli cazibesi mi?" },
  { id: 'fl-18', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Gecenin bir vakti yatağından atılan boğuk ve kısık sesli bir 'Aklımdan çıkmıyorsun' fısıltısı mı, yoksa kapıya aniden gelen sürpriz bir ziyaret mi daha seksi?" },
  { id: 'fl-19', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Biriyle flört ederken ilk öpücüğü almak için cesurca hamle yapan taraf mı olursun, yoksa karşındakini sabırsızlıktan delirtip onun hamle yapmasını mı beklersin?" },
  { id: 'fl-20', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Biriyle baş başayken aradaki sessizlik uzadığında gözlerinin içine bakmaya devam edebilir misin yoksa dudaklarına mı kayarsın?" },
  { id: 'fl-21', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sence bir ilişkide kıskançlık dozu nasıl olmalı: Hafifçe sahiplenip 'sen sadece benimsin' hissi veren mi, yoksa tamamen sınırsız bir rahatlık mı?" },
  { id: 'fl-22', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Duştan yeni çıkmış, üzerinde sadece havlu varken mutfakta kahve yapan bir partner görmek gününü ve planlarını ne derece altüst eder?" },
  { id: 'fl-23', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "İlişkide duygusal bağ olmadan yaşanan tensel çekim sana boş mu gelir, yoksa tutku tek başına da kural tanımaz mı?" },
  { id: 'fl-24', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Biriyle sevgiliyken en çok hangi an onun aklını başından aldığını hissedersin: Ona yemek hazırladığın an mı, yoksa gece ona doğru sokulduğun an mı?" },
  { id: 'fl-25', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Partnerinin boynuna sarılıp kokusunu içine çekerken kulağına fısıldayacağın o en cüretkâr 'iyi ki yanımdasın' cümlesi ne olurdu?" },
  { id: 'fl-26', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "İki insan arasında aniden başlayan bir çekim yüzünden dışarıdaki tüm randevu planını iptal edip tüm günü yatakta geçirmeyi kabul eder miydin?" },
  { id: 'fl-27', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sevgilinin sana gün içinde çalıştığın yere 'akşam için sabırsızlanıyorum' temalı kışkırtıcı bir mesaj atması motivasyonunu nasıl etkiler?" },
  { id: 'fl-28', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sence bir insanı en çekici yapan şey masumiyeti midir, yoksa içinde sakladığı ve sadece partnerine gösterdiği o gizli edepsizlik mi?" },
  { id: 'fl-29', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "İlişkide kontrolü elinde tutmayı seven biri misin, yoksa partnerinin seni kucağına çekip 'bu gece bana bırak' demesi seni daha çok mu rahatlatır?" },
  { id: 'fl-30', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Aynı evde yaşansa; sabah uyanır uyanmaz ilk temasın bir öpücük olması senin için ne kadar vazgeçilmez bir ilişki ritüeli olurdu?" },
  { id: 'fl-31', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Birlikte baş başa bir yolculuğa çıkılsa; ıssız bir yol kenarında arabayı sağa çekip sadece öpüşmek için durmak sana ne kadar romantik ve ateşli gelir?" },
  { id: 'fl-32', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sence uzun süreli bir ilişkide tutkuyu diri tutan şey küçük fantezi kaçamakları mıdır, yoksa gün içindeki o sürekli flörtleşme hali mi?" },
  { id: 'fl-33', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Karşı tarafın sana hafifçe meydan okuyup 'beni etkileyemezsin' tavrı takınması mı içindeki avcıyı uyandırır, yoksa ilk andan teslim olması mı?" },
  { id: 'fl-34', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sevgilinin tişörtünü veya gömleğini üzerine geçirip evin içinde öylece dolaşmak fikri sende nasıl bir yakınlık ve seksi his uyandırır?" },
  { id: 'fl-35', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Bir ilişkide 'biz artık birbirimizin her şeyiyiz' hissi sence ilk kalbi açtığında mı başlar, yoksa ilk kez sınırları unuttuğunuzda mı?" },
  { id: 'fl-36', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Partnerinin seni arkandan sarılarak mutfakta veya balkonda sıkıştırması ve boynunu öpmesi sende nasıl bir elektriklenme yaratır?" },
  { id: 'fl-37', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Sence iki insanın ilişkisinde en tehlikeli an hangisi: Sırların kalmadığı o aşırı rahatlık dönemi mi, yoksa aradaki o bastırılamaz cinsel arzu mu?" },
  { id: 'fl-38', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Biriyle tek bir gecelik bir kaçamak yaşanacak olsa; bu sabaha kadar süren derin bir sohbet mi olurdu, yoksa nefes nefese bir yakınlaşma mı?" },
  { id: 'fl-39', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "İlişkide karşı tarafta en çok aradığın şey: Sana güven veren bir sığınak olması mı, yoksa her an nabzını yükselten bir heyecan kaynağı olması mı?" },
  { id: 'fl-40', cat: 'flirt', title: 'Aşk & Flört', icon: '💋', text: "Şu an bu oyunu oynarken, karşı cinsten biriyle ilgili aklından geçen ama 'bunu söylersem çok ileri giderim' dediğin o sınırları zorlayan düşünce nedir?" }
];

// ============================================================================
// 🔥 2. SICAK İTİRAF (+18 VIP Yetişkin & Tensel Gerilim Soruları)
// ============================================================================
const HOT_QUESTIONS = [
  { id: 'ht-1', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Gözlerin kapalıyken birinin kulağına fısıltıyla 'Şu an sadece nefes al ve hiçbir şey düşünme, kontrol tamamen bende' demesi sende nasıl bir ürperti yaratır?" },
  { id: 'ht-2', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Seni teslim almak isteyen biri acele etmeyip dakikalarca sadece boynundan ve kulak memenden öpse; ilk pes edip 'artık durma' diyen sen mi olursun, yoksa sonuna kadar dayanır mısın?" },
  { id: 'ht-3', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Özel bir anda ses tonu kısıldığında sana adınla hitap edilmesi mi içini daha çok titretir, yoksa kulağına sadece nefes nefese fısıldanan 'benimsin' kelimesi mi?" },
  { id: 'ht-4', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Karşı tarafın her nefesini ve arzusunu net görebileceğin loş bir aydınlık mı, yoksa sadece dokunuşlara teslim olduğun zifiri karanlık mı seni daha çok savunmasız bırakır?" },
  { id: 'ht-5', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Sence bir insanı baştan çıkaran şey kusursuz bir iç çamaşırı mıdır, yoksa o çamaşırın üzerindeyken takındığı o kendinden emin ve cüretkâr tavır mı?" },
  { id: 'ht-6', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Gözlerini kapattığında, parmak uçlarının boynundan köprücük kemiğine doğru yavaşça inmesi sende nasıl bir elektrik dalgası yaratır?" },
  { id: 'ht-7', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Seni baştan çıkaran şey; ne istediğini çok iyi bilip seni yönlendiren bir özgüven mi, yoksa sana dokunurken heyecandan nefesi kesilen bir masumiyet mi?" },
  { id: 'ht-8', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Biriyle yakınlaşırken sınırlarını zorlayan şey hafifçe saçının kavranıp boynunun açılması mıdır, yoksa belinden sıkıca kavranıp kendine çekilmen mi?" },
  { id: 'ht-9', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Cinsellik ve fanteziler konusunda henüz hiç kimseyle yaşamadığın ama 'doğru kişiyle kesinlikle denemeliyim' dediğin o gizli merakın nedir?" },
  { id: 'ht-10', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Seni tamamen zevke odaklamak isteyen biri ellerini nazikçe tutsa ve 'Sadece hissetmene izin ver' dese, gardını ne kadar çabuk indirirdin?" },
  { id: 'ht-11', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Bir öpüşmenin en ateşli anı sence nedir: İlk temasın hemen öncesindeki o nefes nefese bekleme anı mı, yoksa alt dudağın hafifçe ısırıldığı an mı?" },
  { id: 'ht-12', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Kulaklığında konuşurken mikrofona iyice yaklaşılıp nefes sesi hissettirildiğinde bu vücudunda fiziksel bir ürperti yaratır mı?" },
  { id: 'ht-13', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Yatakta karşı konulmaz bir sabırsızlıkla kıyafetlerin aceleyle çıkarılması mı daha tahrik edici, yoksa her santimin yavaşça açığa çıkarılması mı?" },
  { id: 'ht-14', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "İki insan arasındaki heyecanı en çok ne harlar: Birbirine dokunamadan sadece bakışlarla arzulandığını hissetmek mi, yoksa ten tene kalıp hiç konuşmamak mı?" },
  { id: 'ht-15', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Özel bir anda duyacağın tek bir cüretkâr kelimeyle için titreyecek olsa, o kelimenin nasıl bir fısıltı olmasını isterdin?" },
  { id: 'ht-16', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Teninde dudaklar gezinirken en çok nerede durup derin bir iç çekmesini ve seni bekletmesini arzulardın?" },
  { id: 'ht-17', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Flört ederken bilerek karşı tarafı ateşe verip 'biraz daha bekle' diyerek arzuyu tırmandırmayı mı seversin, yoksa ilk pes eden sen mi olursun?" },
  { id: 'ht-18', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Birinin doğal ten kokusunun tenine karışması sende nasıl bir arzu patlaması yaratır? Hangi temas seni anında teslim alır?" },
  { id: 'ht-19', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Özel bir anda tamamen çaresiz kalıp sadece karşı tarafın yönlendirmesine itaat etmek fikri seni korkutur mu, yoksa içini mi gıdıklar?" },
  { id: 'ht-20', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Sanalda bir ses tonundan veya nefes alış verişinden etkilenip kendini onun gerçek dokunuşlarını hayal ederken bulduğun bir an oldu mu?" },
  { id: 'ht-21', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Yakınlaşırken karşı tarafın bunu kısık sesli dirty talk fısıltılarıyla belli etmesi mi, yoksa boğuk iniltiler ve vücut kasılmalarıyla hissettirmesi mi seni doruğa taşır?" },
  { id: 'ht-22', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Gözlerinin ipek bir kumaşla kapatıldığını ve nereye dokunulacağını sadece hissederek beklediğini hayal et; ilk temas nerede olursa nefesin kesilirdi?" },
  { id: 'ht-23', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Karşı cinste seni saniyeler içinde etkisiz hale getiren o 'tehlikeli detay' nedir: Kısık bir ses tonu mu, kışkırtıcı bir gülümseme mi yoksa cüretkâr bir dokunuş mu?" },
  { id: 'ht-24', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Sabah gözlerini açtığında yanında çırılçıplak sarılmış bir beden bulsan; güne tembelce sarılarak mı başlarsın, yoksa anında ateşi harlar mısın?" },
  { id: 'ht-25', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Teninde hafif tırnak izleri veya boynunda kırmızı bir öpücük izi kalması sende gizli bir gurur ve sahiplenilme hissi uyandırır mı?" },
  { id: 'ht-26', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Sence iki insan arasındaki tensel uyum sonradan öğrenilebilir mi, yoksa ilk dokunuştaki o elektrik her şeyi tek saniyede belli eder mi?" },
  { id: 'ht-27', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Gün boyu gelen gizemli ve kışkırtıcı ses kayıtlarıyla geceye hazırlanmak mı, yoksa aniden gelişen durdurulamaz bir tutku patlaması mı daha çekici?" },
  { id: 'ht-28', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Ateşli bir anın tam ortasında kulağına eğilip 'Beni delirtiyorsun...' diye fısıldanması sende nasıl bir his uyandırırdı?" },
  { id: 'ht-29', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Birinin senin üzerindeki tüm kontrolü kaybetmesi ve sana bakarken gözlerinin arzuyla kararması sende nasıl bir haz yaratır?" },
  { id: 'ht-30', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Sana göre dokunulmaktan en çok zevk alınan ama kimsenin pek tahmin etmediği o gizli ve hassas nokta vücudunda neresidir?" },
  { id: 'ht-31', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Sevişme bittikten hemen sonra sırt sırta dönmek yerine, nefesler normale dönene kadar ten tene sarılıp sessizce kalmak senin için ne kadar değerlidir?" },
  { id: 'ht-32', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Karşı tarafın 'Bu gece sadece benim için güzelsin ve sadece benimsin' hissini hissettirmesi ruhunu mu okşar, yoksa arzunu mu kamçılar?" },
  { id: 'ht-33', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Sence yatakta utanmayı ve çekingenliği bir kenara bıraktıran şey güven midir, yoksa karşı tarafın yaydığı o durdurulamaz arzu mu?" },
  { id: 'ht-34', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Daha önce hiç kimseye anlatmadığın, aklına geldikçe içini ısıtan en cesur yatak fantezin genel olarak nasıl bir sahnedir?" },
  { id: 'ht-35', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Karşı tarafın ellerini beline koyup seni kendine doğru çekmesi ve dudaklarını milimler kala bekletmesi seni nasıl bir sabırsızlığa sürükler?" },
  { id: 'ht-36', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Şu an bu sesli aramada ses tonunla hissettirmek istediğin ama kelimelere dökmekten çekindiğin o arzu dolu his nedir?" },
  { id: 'ht-37', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Bir yakınlaşmada en çok ne zaman kontrolünü kaybedersin: Karşı taraf canını hafifçe yaktığında mı, yoksa sana aşırı şefkatli ve tutkulu yaklaştığında mı?" },
  { id: 'ht-38', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Vücudunun hangi bölgesinin öpülmesi veya okşanması bütün savunma mekanizmalarını yerle bir edip seni tamamen teslim alır?" },
  { id: 'ht-39', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Gözlerinin içine kilitlenip hiç konuşmadan sadece nefeslerin birbirine karıştığı o yoğun sessizlik seni ürkütür mü, yoksa aklını mı başından alır?" },
  { id: 'ht-40', cat: 'hot', title: 'Sıcak İtiraf (+18)', icon: '🔥', text: "Gecenin bu saatinde tek başınayken zihninde canlandırdığın o en sıcak ve tutkulu yakınlaşma sahnesi nedir?" }
];

// ============================================================================
// 🎭 3. GECE & TABU (40 Yeni Sır, Gece Hayatı & Tabu Sorusu)
// ============================================================================
const TABOO_QUESTIONS = [
  { id: 'tb-1', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Yakalanma riskinin tavan yaptığı, beklenmedik veya tehlikeli bir yerde yaşadığın en adrenalin dolu kaçamak veya yakınlaşma neydi?" },
  { id: 'tb-2', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Dünyada 24 saatliğine hiçbir ahlaki denetim veya kural olmasa, aklından geçen o en kuralsız ve cüretkâr kaçamak ne olurdu?" },
  { id: 'tb-3', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Karşı cinsten birinin tek bir bakışına veya tavrına kapılıp tüm prensiplerini unuttuğun ve anlık bir dürtüyle peşinden gittiğin oldu mu?" },
  { id: 'tb-4', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Hiç yan odada birileri varken ses çıkarmamak adına nefesini tutarak veya yastığı ısırarak yakınlaştığın oldu mu?" },
  { id: 'tb-5', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Sosyal medyada yanlış kişiye son derece cesur ve kışkırtıcı bir mesaj gönderip panikle silmeye çalıştığın oldu mu?" },
  { id: 'tb-6', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Toplumun yargılayacağı ama senin içten içe son derece heyecan verici ve çekici bulduğun en büyük tabu çekimin nedir?" },
  { id: 'tb-7', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Hiç aklını başından alan birinin cazibesine kapılıp mantığınla arzuların arasında tehlikeli bir sınırda gezindiğin oldu mu?" },
  { id: 'tb-8', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Karşı cinse kendini daha gizemli veya ulaşılamaz göstermek için takındığın o en kışkırtıcı maske nedir?" },
  { id: 'tb-9', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Gecenin sabahında aynaya bakıp 'gerçekten dün gece sınırları bu kadar aştım mı' dediğin o unutulmaz an neydi?" },
  { id: 'tb-10', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Eski flörtünü veya merak ettiğin birini gözetlemek için kullandığın gizli bir fake hesabın var mı? En son neye baktın?" },
  { id: 'tb-11', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Biriyle baş başa kaldığında ortamdaki tehlikeli elektriği hissedip geri adım atmak yerine bilerek ateşe yürüdüğün oldu mu?" },
  { id: 'tb-12', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Gece yarısı telefonuna düşen ve seni hem şaşırtan hem de fazlasıyla heyecanlandıran en cüretkâr bildirim neydi?" },
  { id: 'tb-13', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Ailenden ve çevrenden sonsuza kadar saklayacağın, seninle mezara gidecek en karanlık sırrın hangi konuyla ilgilidir?" },
  { id: 'tb-14', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Gecenin rehaveti ve uykusuzluğun verdiği cesaretle karşı tarafa attığın ve sabah görünce yüzünü kızartan o en ateşli mesaj neydi?" },
  { id: 'tb-15', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Bir ortamda iki kişinin senin ilgin için açıkça rekabete girip sana sahip olmak istediğini hissettiğin bir an yaşadın mı?" },
  { id: 'tb-16', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Dışarıdan bakanların seni 'çok sakin ve hanımefendi' bildiği ama baş başa kaldığında içinden çıkan o sınır tanımaz tarafın nedir?" },
  { id: 'tb-17', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Hiç aynı dönemde iki flörtü idare ederken mesajları veya buluşma saatlerini karıştırıp pot kırdın mı?" },
  { id: 'tb-18', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Yasak, gizli ve kimsenin bilmemesi gereken ilişkiler mi senin adrenalini daha çok yükseltir yoksa sakin sular mı?" },
  { id: 'tb-19', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Bir otelde veya tatilde komşu odadan gelen tutkulu sesleri duyup kendini garip bir heyecan ve merak içinde buldun mu?" },
  { id: 'tb-20', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Eski sevgilinin yeni sevgilisini sosyal medyada gördüğünde içinden geçirdiğin o en dürüst ve kibirli düşünce neydi?" },
  { id: 'tb-21', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Bir ilişkide ihanetin başladığı nokta sence tensel temas mıdır, yoksa zihinde başka birini arzuladığın o ilk an mı?" },
  { id: 'tb-22', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "İlk kendi maaşınla tek başına bir eve çıktığında, gardırobunun en gizli köşesine saklayacağın o kimsenin görmeyeceği en cesur iç giyim parçası ne olurdu?" },
  { id: 'tb-23', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Gecenin ilerleyen saatlerinde aldığın ve 'iyi ki yapmışım' dediğin en plansız, kuralsız kararın neydi?" },
  { id: 'tb-24', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Kendi sınırlarını en çok zorlayan ve 'bunu hissetmemem gerekirdi' dediğin o yasak kıvılcım kiminleydi?" },
  { id: 'tb-25', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Sanal ortamda başlayıp gerçek hayatta bir araya geldiğinizde inanılmaz bir tutku ve elektrikle biten bir anın oldu mu?" },
  { id: 'tb-26', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Kendi belirlediğin ve asla esnetmem dediğin hangi katı ahlaki kuralını tutkulu bir gecede yerle bir ettin?" },
  { id: 'tb-27', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Sosyal medyada gece geç saatte birinin hikayesine verdiğin en cüretkâr yanıt neydi ve karşıdan nasıl bir tepki geldi?" },
  { id: 'tb-28', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Hiç araba içinde veya tenha bir otoparkta yakınlaşırken dışarıdan birinin yaklaşmasıyla panik ve adrenalin yaşadığın bir an oldu mu?" },
  { id: 'tb-29', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Bir insanı tamamen arzulamana rağmen sosyal statüsü, konumu veya tabular yüzünden uzak durmak zorunda kaldığın oldu mu?" },
  { id: 'tb-30', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Telefonunda 'biri bunu görürse hayatım kayar' dediğin gizli bir yazışma, kilitli bir not veya arama geçmişi var mı?" },
  { id: 'tb-31', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Gerçek hayatta tabularını tamamen yıkıp bir partnere 'bu gece kontrol tamamen sende' diyerek teslim olma fikri sana nasıl hissettirir?" },
  { id: 'tb-32', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "İntikam duygusuyla veya birini kıskandırma amacıyla bilinçli olarak başka biriyle yakınlaştığın oldu mu?" },
  { id: 'tb-33', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Gecenin sonunda 'keşke bu gece hiç bitmese' dediğin ve tenini hala hatırladığın o kişi kimdi?" },
  { id: 'tb-34', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Sence iki yetişkin arasındaki sadakat duygusu karşılıklı arzuya mı bağlıdır yoksa sadece ahlaki bir sorumluluk mudur?" },
  { id: 'tb-35', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Hiç birine karşı koyamadığın için mantığının 'dur' dediği ama bedeninin sonuna kadar gittiği bir arzu hatası yaptın mı?" },
  { id: 'tb-36', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Çevrende herkesin kusursuz sandığı ama senin iç yüzünü bildiğin en şoke edici ilişki skandalı neydi?" },
  { id: 'tb-37', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Kendi evinde tek başına kaldığın bir gecede, kapıyı kilitleyip tamamen özgürleştiğinde aklından geçen o en kuralsız fantezi nedir?" },
  { id: 'tb-38', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Cinsel tabular söz konusu olduğunda 'bunu hayatımda doğru insanla en az bir kez mutlaka denemeliyim' dediğin çılgınlık nedir?" },
  { id: 'tb-39', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Partnerin bu gece sana en derin tabu fantezisini açıklasa ve sınırları yıkmayı teklif etse cevabın ne olurdu?" },
  { id: 'tb-40', cat: 'taboo', title: 'Gece & Tabu', icon: '🎭', text: "Şu an bu odada ve bu saatte tüm kuralları tamamen çöpe atıp aklından geçirdiğin en yasak düşünceyi dürüstçe söyle!" }
];


// ==========================================================================
// 2. KADEMELİ SANAL CESARET HAVUZLARI (LVL 1 -> LVL 5)
// Oyunda ilerledikçe veya pas geçildikçe seviye adım adım yükselir!
// ==========================================================================

// LVL 1: MASUM & TATLI FLÖRT (Buz kırıcı, iltifat, masum temas & koklama arzusu)
const DARES_LVL_1 = [
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Gözlerinin içine bakarak cilveli ve samimi bir tonla sor:",
    femaleText: "Gözlerinin içine bakarak soruyorum: Üstümü değiştirmemi ister misin? Bu gece senin için daha rahat bir şeyler giyebilirim...",
    maleText: "Gözlerinin içine bakarak soruyorum: Üstümü değiştirmemi, tişörtümü çıkarmamı ister misin? Bu gece seninleyken daha rahat olmak istiyorum..."
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Kısık sesle mikrofona fısılda:",
    femaleText: "Şu an yanımda olsaydın omzuna yaslanıp kokunu içime çekmek isterdim... Seni koklamak şu an aklımdan hiç çıkmıyor.",
    maleText: "Şu an yanımda olsaydın seni kendime çekip kokunu içime çekmek isterdim... Kokun beni şimdiden büyülüyor."
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Mikrofona tatlı ve samimi bir ses tonuyla söyle:",
    femaleText: "Gülüşün o kadar tatlı ki, ekrandan bakarken yüzümde istemsizce bir tebessüm ve tatlı bir heyecan oluşuyor...",
    maleText: "Gözlerin ekrandan bile öyle güzel parlıyor ki, bakışlarımı senden bir saniye bile kaçıramıyorum..."
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Cilveli bir tebessümle kameraya bakarak söyle:",
    femaleText: "Üzerimdeki kıyafeti nasıl buldun? Dürüst ol... Bu gece seninle konuşurken özel hissetmek istedim.",
    maleText: "Bu gece ekranda o kadar çekici görünüyorsun ki, sana odaklanmakta bazen tatlı bir zorluk yaşıyorum..."
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Derin bir tebessümle mikrofona söyle:",
    femaleText: "Ses tonun öyle huzurlu ve tatlı geliyor ki, saatlerce hiç durmadan sadece seni dinleyebilirim...",
    maleText: "Bana öyle güzel ve sıcak bakmaya devam edersen bu sohbet hiç bitmesin, sabah olsun isterim..."
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Kısık ve tatlı bir fısıltıyla mikrofona söyle:",
    femaleText: "Seni tanıdıkça içimde sana karşı çok tatlı, gizli bir merak uyanıyor... Farkında mısın?",
    maleText: "Aramızda oluşan bu tatlı çekim benim aklımı başımdan almaya başladı bile..."
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Kameraya gözlerini dikip meydan okur gibi fısılda:",
    femaleText: "Şu an ekrandan gözlerimin içine 5 saniye kesintisiz bak ve bana en çok hangi yönümün seni cezbettiğini söyle...",
    maleText: "Gözlerimin içine 5 saniye kesintisiz odaklanmanı istiyorum... Bakalım ilk kim gözlerini kaçıracak?"
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Sakin ve yumuşak bir ses tonuyla mikrofona söyle:",
    femaleText: "Yanımda olsaydın parmaklarını saçlarımın arasında usulca gezdirip beni şımartmana izin verirdim...",
    maleText: "Yanımda olsaydın saçlarını geriye atıp o güzel yüzünü avuçlarımın arasına alırdım..."
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Karşı tarafa tatlı bir rica fısılda:",
    femaleText: "Bana ses kaydı atar gibi en kısık ses tonunla bir kez 'iyi geceler güzelim' der misin?",
    maleText: "Bana mikrofondan en tatlı fısıltınla bir kez 'sevgilim' diye seslenir misin?"
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Hafif utanmış ama flörtöz bir tavırla söyle:",
    femaleText: "Bu oyunu oynarken kalbimin nasıl hızlandığını duysan kesin benimle tatlı tatlı dalga geçerdin...",
    maleText: "Bu oyunda her soru geldiğinde sana bakarken nabzımın nasıl arttığını tahmin bile edemezsin..."
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "İçten ve karizmatik bir tonla fısılda:",
    femaleText: "Ekrandan bile yaydığın enerji o kadar büyüleyici ki, kendimi kaptırmamak elde değil...",
    maleText: "Senin gibi bir kadınla böyle baş başa konuşmak gecemin en güzel ve unutulmaz detayı oldu..."
  },
  {
    levelName: "LVL 1 • Masum Flört",
    badgeClass: "badge-flirt",
    desc: "Gülümseyerek mikrofona söyle:",
    femaleText: "Sohbetin beni öyle sardı ki, uykum olsa bile ekranı kapatıp gitmeye hiç ama hiç niyetim yok...",
    maleText: "Normalde bu saatte çoktan uyurdum ama söz konusu sen olunca zamanın nasıl aktığını tamamen unuttum..."
  }
];

// LVL 2: TENSEL MERAK (Yakınlaşma arzusu, koku, boyun fısıltıları, el ele tutuşma)
const DARES_LVL_2 = [
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Mikrofona yaklaş, derin bir nefes vererek söyle:",
    femaleText: "Şu an yanımda olsaydın elimi eline kenetleyip sana sımsıkı sarılır, nefesini hissederdim...",
    maleText: "Yanımda olsan belinden tutup seni kendime çeker, kokunu boynundan içime çekerdim..."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Gözlerini ekrana dikip boğuk bir tonla fısılda:",
    femaleText: "Boynumdaki nabzın nasıl attığını parmaklarınla hissetmeni isterdim... Dokunsan anlarsın.",
    maleText: "Sana doğru her yaklaştığımda kalbinin nasıl çarpacağını merak ediyorum... Dokunmam yeterdi."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Boğuk ve çekici bir ses tonuyla söyle:",
    femaleText: "Ses tonunla beni ne kadar baştan çıkardığının ve içimi ısıttığının farkında mısın?",
    maleText: "Bana ekrandan öyle bakmaya devam edersen bu gece ikimize de uyku yok, bilmiş ol..."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Merak uyandırıcı ve tensel bir tonla sor/söyle:",
    femaleText: "Şu an yanımda olsaydın tenimin sıcaklığını hissetmek için elini ilk nereye koyardın?",
    maleText: "Yanımda olsan ilk dokunuşum boynundan başlar, yavaşça omuzlarına ve beline doğru kayardı..."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Mikrofona tam dibinden fısılda:",
    femaleText: "Kulağına yaklaşıp nefesimi hissettirsem tüylerinin nasıl diken diken olacağını hayal edebiliyorum...",
    maleText: "Kulağına doğru eğilip nefesimi boynuna bıraksam kalbin yerinden fırlayacak gibi olurdu değil mi?"
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Dudaklarını ısırarak mikrofona fısılda:",
    femaleText: "Aramızdaki bu çekim giderek tehlikeli bir hal alıyor ve bu benim inanılmaz hoşuma gidiyor...",
    maleText: "Seninle aramızda öyle bir elektrik var ki, dokunsak kıvılcım çıkacak gibi hissediyorum..."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Sıcacık ve etkileyici bir tonla söyle:",
    femaleText: "Yanımda olsan ilk sarıldığımız anı hiç bitirmek istemezdim, göğsünde kaybolurdum...",
    maleText: "Seni kollarımın arasına aldığımda dünyayı unutturacağıma emin olabilirsin..."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Gözlerini kapatıp hayal eder gibi söyle:",
    femaleText: "Teninin kokusunun üzerime sinmesini ve günlerce oradan çıkmamasını öyle çok isterdim ki...",
    maleText: "Kokunu tenime kazımak ve sabah senin kokunla uyanmak şu an tek istediğim şey..."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Tensel bir ses komutu ver:",
    femaleText: "Mikrofona yaklaş ve bana tenimi karıncalandıracak kadar derin, kısık bir nefes ver...",
    maleText: "Mikrofona yaklaş ve boynuma fısıldar gibi boğuk bir sesle sadece 'buradayım' de..."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Cüretkâr bir merakla sor/söyle:",
    femaleText: "Ellerimin vücudunda gezinmesine izin verseydin ilk nereye dokunmamı isterdin?",
    maleText: "Parmaklarımın teninde gezinirken bıraktığı hisse karşı koyamayacağını biliyorsun..."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Kameraya odaklanıp nefesini tutarak söyle:",
    femaleText: "Bana öyle bir bakış attın ki, şu an ekran olmasa aramızdaki mesafe sıfıra inmişti...",
    maleText: "Gözlerin beni öyle bir çağırıyor ki, aramızdaki mesafeyi tek hamlede yok etmek istiyorum..."
  },
  {
    levelName: "LVL 2 • Tensel Merak",
    badgeClass: "badge-flirt",
    desc: "Kışkırtıcı bir tebessümle mikrofona fısılda:",
    femaleText: "Bu gece tenimin tenine ihtiyacı olduğunu söylesem ne yapardın?",
    maleText: "Bu gece tenimin tenine değmesi için neleri feda edebileceğimi tahmin bile edemezsin..."
  }
];

// LVL 3: ATEŞLİ GERİLİM (Öpüşme, soyunma ima ve arzuları)
const DARES_LVL_3 = [
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Dudaklarını mikrofona yaklaştırıp söyle:",
    femaleText: "Beni öpmek için ne kadar sabırsızlandığını gözlerinden okuyabiliyorum... Dudaklarım seni bekliyor.",
    maleText: "O güzel dudaklarını sabaha kadar öpüp kokunu tenime kazımak istiyorum, sabrım tükeniyor..."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Kısık ve kışkırtıcı bir ses tonuyla söyle:",
    femaleText: "Üzerimdekileri çıkarmama yardım etmek için sabırsızlanıyorsun değil mi? Gözlerin ele veriyor...",
    maleText: "Seni kollarıma aldığımda kontrolünü tamamen kaybedeceğini ikimiz de çok iyi biliyoruz..."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Kendinden emin ve dominant bir fısıltıyla söyle:",
    femaleText: "Bu gece bana karşı koyamayacağını ikimiz de çok iyi biliyoruz... Teslim olmaya hazır mısın?",
    maleText: "Bana teslim olmaktan başka hiçbir çaren yok bebeğim... Kontrolü tamamen bana bırakacaksın."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Öpücük ve nefes komutu ver:",
    femaleText: "Dudaklarını mikrofona yaklaştır ve bana öyle bir öpücük sesi ver ki tüm vücudum titresin...",
    maleText: "Mikrofona yaklaş ve dudaklarını kulağımda hissedeceğim kadar şehvetli bir nefes bırak..."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Boğuk bir sesle kışkırt:",
    femaleText: "Yanımda olsaydın üzerimdeki bluzun düğmelerini çözerken ellerin titrer miydi?",
    maleText: "Yanımda olsan üzerindekileri çıkarmak için tek bir saniye bile tereddüt etmezdim..."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Gözlerini dikip meydan oku:",
    femaleText: "Bana doğru bir adım daha atarsan kendimi tutamayacağımı ve seni deli gibi öpeceğimi biliyorsun...",
    maleText: "Sana dokunduğum ilk saniyede tüm direncini tek hamlede kıracağımı ikimiz de biliyoruz..."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Nefes nefese mikrofona fısılda:",
    femaleText: "Senin o cüretkâr bakışların beni her saniye daha da ateşliyor, nefesim hızlanıyor...",
    maleText: "Bana öyle dudaklarını ısırarak bakmaya devam edersen bu gece seni rüyamda bırakmam..."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Cilveli ve boğuk bir tonla söyle:",
    femaleText: "Bu gece aramızdaki tüm mesafeleri ve kuralları unutmak, sadece tenimizi hissetmek istiyorum...",
    maleText: "Aramızdaki mesafeler olmasa şu an o yatakta bambaşka şeyler konuşuyor olurduk..."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Mikrofonun dibine sokulup fısılda:",
    femaleText: "Şu an nefesimin nasıl hızlandığını bir bilsen, o ekranda duramazdın sevgilim...",
    maleText: "Şu an sesindeki o titremeyi hissettikçe yerimde durmakta ciddi anlamda zorlanıyorum..."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Hayal kurdurur gibi şehvetle anlat:",
    femaleText: "Beni öperken boynumdan belime doğru inen ellerini hayal etmek bile beni heyecanlandırıyor...",
    maleText: "Seni öperken saçlarını hafifçe geriye çekip boynunu tamamen savunmasız bırakırdım..."
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Emir verir gibi fısılda:",
    femaleText: "Bu gece seninle tek bir kuralım var: Bana 'dur' demek kesinlikle yasak!",
    maleText: "Bu gece seninle tek bir kuralımız olacak: Bana teslim olacaksın ve gözlerini benden ayırmayacaksın!"
  },
  {
    levelName: "LVL 3 • Ateşli Gerilim",
    badgeClass: "badge-hot",
    desc: "Derin ve karizmatik bir fısıltıyla söyle:",
    femaleText: "Şu an kulağıma fısıldamanı istediğim tek şey: Bu gece sadece benimle misin?",
    maleText: "Kulağına fısıldıyorum: Bu gece aklını başından alana kadar seni bırakmayacağım..."
  }
];

// LVL 4: TUTKULU DIRTY TALK (Yatak odası fısıltıları, derin nefesler, teslimiyet)
const DARES_LVL_4 = [
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Mikrofona iyice sokularak en baştan çıkarıcı ses tonunla fısılda:",
    femaleText: "İç çamaşırım şimdiden sırılsıklam oldu... Yanımda olsan elini uzatıp kontrol ederdin değil mi?",
    maleText: "Şu an yanımda olsan seni duvara yaslar, o güzel boynunu ısıra ısıra öper, nefesini keserdim."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Nefes nefese kalmış gibi fısılda:",
    femaleText: "Üzerime çıkıp beni nefessiz bırakana kadar hareket etmeni öyle çok istiyorum ki...",
    maleText: "Seni masaya yatırıp üzerindekileri tek hamlede sıyırmamak için kendimi zor tutuyorum."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Gözlerinin içine odaklanarak derin bir sesle söyle:",
    femaleText: "Beni bu gece kollarının arasında çaresizce inletmeni istiyorum... Durmak bilme.",
    maleText: "Bu gece seni altıma aldığımda ismimi sayıklamaktan sesin kısılacak, sana garanti ediyorum."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Şehvetli bir fısıltıyla emret:",
    femaleText: "Bana tamamen teslim olup 'bu gece ne istersen yapabilirsin' demeni istiyorum...",
    maleText: "Bana bak ve 'bu gece tamamen seninim, bana istediğini yap' de... Duymak istiyorum."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Kısık ve tutkulu bir tonla söyle:",
    femaleText: "Vücudumun her bir noktasını sabaha kadar dudaklarınla keşfetmeni ve bana yalvartmanı istiyorum...",
    maleText: "Teninin her santimetresini dudaklarımla ateşe vereceğim, sabaha kadar durmak yok."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Cüretkâr bir itiraf komutu ver:",
    femaleText: "Mikrofona yaklaş ve kulağıma en çok arzuladığın o gizli yatak odası fantezini fısılda...",
    maleText: "Mikrofona yaklaş ve şu an bana dokunsan yapacağın ilk vahşi hareketi söyle..."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Kışkırtıcı bir ses tonuyla fısılda:",
    femaleText: "Sana dokunduğum an kontrolünü kaybedip üzerime atlayacağını ikimiz de çok iyi biliyoruz...",
    maleText: "Sana arkandan sarılıp kalçalarını kendime bastırdığımda nefesinin nasıl kesileceğini biliyorsun..."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Dominant ve kararlı bir sesle söyle:",
    femaleText: "Bu gece sana yapacaklarımı hayal bile edemezsin... Sabaha kadar benden af dileyeceksin.",
    maleText: "Bu gece sana yapacaklarımdan sonra bir daha hiçbir erkeği aklından bile geçiremeyeceksin."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Replik dikte et:",
    femaleText: "Bana o boğuk ses tonunla 'sadece benimsin' de... Vücudum alev alsın.",
    maleText: "Bana bak ve en cilveli sesinle 'bu gece sana teslimim' de... Aklımı başımdan al."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Sansürsüz ve cesurca mikrofona fısılda:",
    femaleText: "Şu an parmaklarımın bacaklarımın arasında gezindiğini söylesem ekranda nasıl çıldırırdın?",
    maleText: "Şu an sana bakarken ne kadar sertleştiğimi bir bilsen, o ekrandan kaçamazdın..."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Gözlerini kırpmadan fısılda:",
    femaleText: "Beni duvara yaslayıp kalçalarımı sıkarak öpmeni öyle çok arzuluyorum ki...",
    maleText: "Seni kucağıma alıp yatağa fırlattığımda gözlerindeki o çaresiz arzuyu görmek istiyorum."
  },
  {
    levelName: "LVL 4 • Tutkulu Dirty Talk",
    badgeClass: "badge-hot",
    desc: "Tutku dolu bir fısıltıyla bitir:",
    femaleText: "Bu gece seninle öyle bir sevişmek istiyorum ki yorgunluktan konuşamayacak hale gelelim...",
    maleText: "Bu gece seni zevkten tüketene kadar durmayacağım, sabaha kadar sadece sen ve ben."
  }
];

// LVL 5: ALEV ALIYOR! (+18) (Zirve Noktası, Zıplatmak, Tamamen Cinsel, Sınırları Yıkmak)
const DARES_LVL_5 = [
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Mikrofona yaklaş, en cüretkâr ve boğuk sesinle kulağına fısıldar gibi söyle:",
    femaleText: "Şu an yanımda olsan üzerine çıkıp seni öyle bir zıplatırdım ki sabaha kadar feleğin şaşardı...",
    maleText: "Şu an yanımda olsan seni kucağıma alır, zevkten bayıltana kadar zıplatırdım, nefesin kesilirdi!"
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Gözlerini ekrana dikip, dudaklarını ısırarak sansürsüzce fısılda:",
    femaleText: "Beni duvara dayayıp bacaklarımı beline dolamanı ve hiç durmadan içine girmeni istiyorum...",
    maleText: "Seni kucağıma alıp duvara yapıştıracağım, içine öyle sert gireceğim ki iniltilerini bütün bina dinleyecek!"
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Kamerayı kapatıp sadece mikrofona nefes nefese fısılda:",
    femaleText: "Senin o sertliğini içimde hissetmek için öyle yanıyorum ki, dokunsan alev alırım şu an...",
    maleText: "Şu an sana öyle sertleştim ki, yanımda olsan üzerindeki hiçbir şeyi çıkarmaya vaktimiz kalmazdı, yırtardım!"
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Derin nefes alıp vererek en tutkulu ses tonunla söyle:",
    femaleText: "Beni bu gece nefesimi kesecek kadar tutkuyla sev... Bana 'sadece benimsin' de, delirt beni!",
    maleText: "Bu gece o yatağı dağıtacağız! Sana dur diyene kadar durmak yok, sabaha kadar benimsin!"
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Boğuk ve vahşi bir tonla mikrofona fısılda:",
    femaleText: "Üzerimde terlerken gözlerimin içine bakıp sabaha kadar hiç durmadan beni inletmeni istiyorum...",
    maleText: "Seni altımda inletip ismimi nefes nefese bağırtana kadar durmayacağım, bu gece sınır yok!"
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Yatak odası fantezisini sansürsüzce fısılda:",
    femaleText: "Beni yatağa bağlayıp sabaha kadar sınırları tamamen aşmamıza izin vermeni istiyorum...",
    maleText: "Seni kollarından tutup yatağa sabitleyeceğim ve sabaha kadar yalvartana kadar zevki tadacaksın!"
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Kısık ve nefes kesen bir tonla fısılda:",
    femaleText: "Şu an yanımda olsaydın altımdaki her şeyi çıkartıp seni üzerime çeker, sabaha kadar bırakmazdım...",
    maleText: "Yanımda olsan seni bacaklarından tutup kendime çeker, içine öyle derin girerdim ki aklın uçardı..."
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Sansürsüz ve sert bir dille söyle:",
    femaleText: "Bana arkamdan sarılıp saçlarımı çekerken kulağıma ne kadar vahşi olduğunu fısıldamanı istiyorum...",
    maleText: "Saçlarını elime dolayıp boynunu açığa çıkaracağım ve seni inletene kadar durmayacağım!"
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "En cüretkâr ses tonunla meydan oku:",
    femaleText: "Bu gece beni öyle bir doyur ki günlerce yataktan kalkamayayım sevgilim...",
    maleText: "Bu gece seni öyle bir tüketeceğim ki sabah gözlerini açtığında adımı sayıklıyor olacaksın..."
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Dudaklarını ısırıp mikrofona yaklaşarak fısılda:",
    femaleText: "İçimdeki yangını ancak senin o sertliğin söndürebilir... Yanımda olsan duramazdın.",
    maleText: "Seni sabaha kadar duvardan yatağa her yerde inletmek için yanıp tutuşuyorum..."
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Maksimum cinsel arzuyla ses komutu ver:",
    femaleText: "Şu an mikrofona karşı bir kez şehvetli bir inilti bırak... İçimin nasıl yandığını hisset!",
    maleText: "Mikrofona boğuk ve sert bir nefes vererek 'bu gece benimsin' diye bağır... Titret beni!"
  },
  {
    levelName: "LVL 5 • 🔥 ALEV ALIYOR! (+18)",
    badgeClass: "badge-alev",
    desc: "Son sözünü en tutkulu fısıltıyla söyle:",
    femaleText: "Bu gece ikimiz için de geri dönüş yok; birbirimizi tüketene kadar sevişeceğiz, anladın mı?",
    maleText: "Bu gece o kapıyı kilitledim say; sabaha kadar sadece zevk ve inilti olacak!"
  }
];

// Seviye Veritabanı Haritası
const DARE_LEVELS = [DARES_LVL_1, DARES_LVL_2, DARES_LVL_3, DARES_LVL_4, DARES_LVL_5];
const LEVEL_TITLES = [
  "LVL 1 • Masum Flört",
  "LVL 2 • Tensel Merak",
  "LVL 3 • Ateşli Gerilim",
  "LVL 4 • Tutkulu Dirty Talk",
  "LVL 5 • 🔥 ALEV ALIYOR!"
];


// ==========================================================================
// 3. OYUNCU & KADEMELİ SICAKLIK YÖNETİMİ
// ==========================================================================
const PLAYERS = [
  { id: 0, name: "Kadın Oyuncu", gender: "female", score: 0, drinks: 0, avatar: "👩" },
  { id: 1, name: "Erkek Oyuncu", gender: "male", score: 0, drinks: 0, avatar: "👨" }
];

let activePlayerIndex = 0;
let completedCount = 0;
const totalCount = 220;

// Kademeli Sıcaklık (1 - 5): Kesinlikle Level 1'den başlar!
let currentHeatLevel = 1;
let playedDareIndexesByLevel = { 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(), 5: new Set() };
let currentActiveDareIndex = null;

// Her 4 Çevirişte 1 Cesaret Sayacı
let spinsSinceLastDare = 0;

// Oynanmış soru havuzları
let playedFlirtIds = new Set();
let playedHotIds = new Set();
let playedTabooIds = new Set();
let gameHistory = [];

// Çark Dilimleri
const WHEEL_SEGMENTS = [
  { type: 'flirt', label: 'Aşk & Flört', icon: '💋', color: '#db2777', textColor: '#fce7f3' },
  { type: 'dare', label: 'Sanal Cesaret', icon: '⚡', color: '#b45309', textColor: '#fef3c7' },
  { type: 'hot', label: 'Sıcak İtiraf', icon: '🔥', color: '#e11d48', textColor: '#ffe4e6' },
  { type: 'taboo', label: 'Gece & Tabu', icon: '🎭', color: '#7e22ce', textColor: '#f3e8ff' },
  { type: 'flirt', label: 'Aşk & Flört', icon: '💋', color: '#db2777', textColor: '#fce7f3' },
  { type: 'dare', label: 'Sanal Cesaret', icon: '⚡', color: '#b45309', textColor: '#fef3c7' },
  { type: 'hot', label: 'Sıcak İtiraf', icon: '🔥', color: '#e11d48', textColor: '#ffe4e6' },
  { type: 'taboo', label: 'Gece & Tabu', icon: '🎭', color: '#7e22ce', textColor: '#f3e8ff' }
];

const BOX_COLOR_CLASSES = ['box-crimson', 'box-purple', 'box-gold', 'box-emerald', 'box-blue', 'box-flame'];
let currentMysteryBoxes = [null, null, null];

// ==========================================================================
// 4. WEB AUDIO SES MOTORU
// ==========================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTick(freq = 420) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) { }
  }

  playHeartbeat() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      this._pulse(now, 65, 0.35, 0.12);
      this._pulse(now + 0.16, 52, 0.25, 0.15);
    } catch (e) { }
  }

  _pulse(startTime, freq, volume, duration) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);
    osc.frequency.exponentialRampToValueAtTime(30, startTime + duration);
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  playBoxReveal() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.18, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.5);
      });
    } catch (e) { }
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);
        gain.gain.setValueAtTime(0.15, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.4);
      });
    } catch (e) { }
  }

  playDrinkPenalty() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.35);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) { }
  }
}

const audio = new SoundEngine();

// ==========================================================================
// 5. CANVAS ÇARK ÇİZİM & FİZİK MOTORU
// ==========================================================================
const canvas = document.getElementById('wheel-canvas');
const ctx = canvas.getContext('2d');

let currentAngle = 0;
let isSpinning = false;
let spinVelocity = 0;
let lastTickSegment = -1;

function setupCanvasDPI() {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const size = Math.min(rect.width, rect.height) || 500;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  ctx.scale(dpr, dpr);
}

function drawWheel() {
  const dpr = window.devicePixelRatio || 1;
  const size = canvas.width / dpr;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 12;
  const numSegments = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSegments;

  ctx.clearRect(0, 0, size, size);

  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + 6, 0, 2 * Math.PI);
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 6;
  ctx.shadowColor = 'rgba(245, 158, 11, 0.6)';
  ctx.shadowBlur = 15;
  ctx.stroke();
  ctx.restore();

  for (let i = 0; i < numSegments; i++) {
    const seg = WHEEL_SEGMENTS[i];
    const angleStart = currentAngle + i * arcSize;
    const angleEnd = angleStart + arcSize;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angleStart, angleEnd);
    ctx.closePath();

    ctx.fillStyle = seg.color;
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angleStart + arcSize / 2);

    ctx.font = '22px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(seg.icon, radius - 24, 6);

    ctx.font = 'bold 13px Outfit, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillStyle = seg.textColor;
    ctx.fillText(seg.label, radius - 55, 5);

    ctx.restore();
    ctx.restore();
  }

  const dotCount = numSegments * 2;
  for (let i = 0; i < dotCount; i++) {
    const dotAngle = currentAngle + (i * (2 * Math.PI / dotCount));
    const dotX = centerX + (radius + 2) * Math.cos(dotAngle);
    const dotY = centerY + (radius + 2) * Math.sin(dotAngle);

    ctx.save();
    ctx.beginPath();
    ctx.arc(dotX, dotY, 3, 0, 2 * Math.PI);
    ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#f59e0b';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.restore();
  }
}

function checkPointerTick() {
  const numSegments = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSegments;
  const pointerAngle = (3 * Math.PI / 2 - currentAngle) % (2 * Math.PI);
  const normalizedAngle = (pointerAngle + 2 * Math.PI) % (2 * Math.PI);
  const currentSegment = Math.floor(normalizedAngle / arcSize);

  if (currentSegment !== lastTickSegment) {
    lastTickSegment = currentSegment;
    audio.playTick(380 + Math.random() * 80);
    const pointer = document.getElementById('wheel-pointer');
    if (pointer) {
      pointer.style.transform = `scale(1.15) rotate(${Math.random() > 0.5 ? 6 : -6}deg)`;
      setTimeout(() => { pointer.style.transform = 'scale(1) rotate(0deg)'; }, 70);
    }
  }
}

// ÇARK DÖNDÜRME - HER 4 ÇEVİRİŞTE 1 SANAL CESARET GARANTİSİ (HASSAS HEDEFLEME)
function spinWheel() {
  if (isSpinning) return;
  audio.init();

  isSpinning = true;
  document.getElementById('main-spin-btn').disabled = true;

  spinsSinceLastDare++;

  // Eğer 4. çeviriş veya daha fazlaysa kesinlikle Cesaret segmentine (1 veya 5) oturt!
  let targetIndex = -1;
  const isGuaranteedDare = (spinsSinceLastDare >= 4);

  if (isGuaranteedDare) {
    targetIndex = Math.random() < 0.5 ? 1 : 5; // Dare segmentleri
    spinsSinceLastDare = 0;
  } else {
    // Normal çeviriş (0-7 arası rastgele)
    targetIndex = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
    if (WHEEL_SEGMENTS[targetIndex].type === 'dare') {
      spinsSinceLastDare = 0;
    }
  }

  const numSegments = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSegments;

  // Hedef segmentin merkezine oturacak açıyı hesapla
  const targetSegmentCenter = (targetIndex + 0.5) * arcSize;
  const desiredFinalMod = ((3 * Math.PI / 2 - targetSegmentCenter) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  const currentMod = ((currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

  let angleDiff = desiredFinalMod - currentMod;
  if (angleDiff < 0) angleDiff += 2 * Math.PI;

  const extraRevolutions = (5 + Math.floor(Math.random() * 2)) * (2 * Math.PI);
  const totalTargetAngle = currentAngle + extraRevolutions + angleDiff;

  const startAngle = currentAngle;
  const totalDelta = totalTargetAngle - startAngle;
  const duration = 3500;
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(1, elapsed / duration);

    // Cubic ease out
    const easeOut = 1 - Math.pow(1 - progress, 3);
    currentAngle = startAngle + totalDelta * easeOut;

    checkPointerTick();
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      currentAngle = totalTargetAngle;
      checkPointerTick();
      drawWheel();
      isSpinning = false;
      document.getElementById('main-spin-btn').disabled = false;
      onSpinComplete(targetIndex);
    }
  }

  requestAnimationFrame(animate);
}

function onSpinComplete(winningIndex) {
  const winningSegment = WHEEL_SEGMENTS[winningIndex];

  if (winningSegment.type === 'dare') {
    spinsSinceLastDare = 0;
    triggerThreeMysteryBoxes();
  } else if (winningSegment.type === 'flirt') {
    triggerQuestionModal(FLIRT_QUESTIONS, playedFlirtIds, '💋 AŞK & FLÖRT', 'badge-flirt');
  } else if (winningSegment.type === 'hot') {
    triggerQuestionModal(HOT_QUESTIONS, playedHotIds, '🔥 SICAK İTİRAF (+18)', 'badge-hot');
  } else if (winningSegment.type === 'taboo') {
    triggerQuestionModal(TABOO_QUESTIONS, playedTabooIds, '🎭 GECE & TABU', 'badge-taboo');
  }
}

// ==========================================================================
// 6. KADEMELİ 3 GİZEMLİ KUTU (MYSTERY BOX)
// Aktif Sıcaklık Seviyesine (Lvl 1 - Lvl 5) Göre Kademeli Isınan Dares
// ==========================================================================
function triggerThreeMysteryBoxes() {
  audio.playHeartbeat();

  // Aktif seviyedeki cesaretler (Asla birden level 5 gelemez! 1'den başlar, 1'ler bitince 2'ye geçer)
  const baseLvlIndex = Math.min(4, Math.max(0, currentHeatLevel - 1));
  const poolCurrent = DARE_LEVELS[baseLvlIndex];

  if (!playedDareIndexesByLevel[currentHeatLevel]) {
    playedDareIndexesByLevel[currentHeatLevel] = new Set();
  }
  const playedSet = playedDareIndexesByLevel[currentHeatLevel];

  // Henüz oynanmamış cesaretleri topla
  let unplayed = [];
  for (let i = 0; i < poolCurrent.length; i++) {
    if (!playedSet.has(i)) {
      unplayed.push({ item: poolCurrent[i], idx: i });
    }
  }

  // Eğer bu seviyedeki cesaretler bittiyse (1'ler bittikten sonra 2'ye geç)
  if (unplayed.length < 3) {
    if (currentHeatLevel < 5) {
      const prevLvl = currentHeatLevel;
      currentHeatLevel++;
      showLevelToast(`🎉 TEBRİKLER! LEVEL ${prevLvl} TAMAMLANDI! LEVEL ${currentHeatLevel}'E GEÇTİNİZ! 🔥`);
      updateUI();
      return triggerThreeMysteryBoxes();
    } else {
      // Level 5 bittiyse sıfırla, döngüyü sürdür
      playedSet.clear();
      unplayed = poolCurrent.map((item, idx) => ({ item, idx }));
    }
  }

  // Mevcut seviyeden 3 farklı benzersiz cesaret seç
  const shuffled = [...unplayed].sort(() => 0.5 - Math.random());
  currentMysteryBoxes = [shuffled[0], shuffled[1], shuffled[2]];

  // Kutuların renklerini dinamik değiştir
  const shuffledColors = [...BOX_COLOR_CLASSES].sort(() => 0.5 - Math.random());
  for (let i = 0; i < 3; i++) {
    const boxEl = document.getElementById(`box-${i + 1}`);
    if (boxEl) {
      BOX_COLOR_CLASSES.forEach(c => boxEl.classList.remove(c));
      boxEl.classList.remove('shake');
      boxEl.classList.add(shuffledColors[i]);
    }
  }

  const activeP = PLAYERS[activePlayerIndex];
  const badgeEl = document.getElementById('mystery-badge');
  if (badgeEl) badgeEl.textContent = `⚡ SANAL CESARET • LEVEL ${currentHeatLevel} (${LEVEL_TITLES[baseLvlIndex]})`;
  const subtitleEl = document.getElementById('mystery-subtitle');
  if (subtitleEl) subtitleEl.textContent = `Seviye ${currentHeatLevel} • Kutulardan birini seç, partnerine cesurca söyle!`;
  const turnEl = document.getElementById('mystery-turn-note');
  if (turnEl) turnEl.innerHTML = `Sıradaki Oyuncu: <strong>${activeP.name}</strong> • Bir kutu seç!`;
  document.getElementById('mystery-box-modal').classList.remove('hidden');
}

function onMysteryBoxClick(boxIndex) {
  const chosenBoxEl = document.getElementById(`box-${boxIndex + 1}`);
  if (!chosenBoxEl) return;

  chosenBoxEl.classList.add('shake');
  audio.playHeartbeat();

  setTimeout(() => {
    audio.playBoxReveal();
    triggerConfetti();

    document.getElementById('mystery-box-modal').classList.add('hidden');
    chosenBoxEl.classList.remove('shake');

    const selectedEntry = currentMysteryBoxes[boxIndex];
    if (selectedEntry) {
      displayDareResult(selectedEntry.item, selectedEntry.idx);
    }
  }, 700);
}

let currentActiveItem = null;
let currentItemType = 'dare';
let currentItemCategory = '';

function displayDareResult(item, dareIdx) {
  currentActiveItem = item;
  currentItemType = 'dare';
  currentActiveDareIndex = (typeof dareIdx === 'number') ? dareIdx : null;
  currentItemCategory = item.levelName;

  const badgeEl = document.getElementById('result-level-badge');
  badgeEl.className = 'result-level-badge ' + item.badgeClass;
  badgeEl.textContent = item.levelName;

  const activeP = PLAYERS[activePlayerIndex];
  const targetP = PLAYERS[1 - activePlayerIndex];

  document.getElementById('active-speaker-avatar').textContent = activeP.avatar;
  document.getElementById('active-speaker-text').textContent = `${activeP.name}, ${targetP.name}'e Söylüyor:`;

  const textEl = document.getElementById('result-text');
  if (activeP.gender === 'female') {
    textEl.textContent = item.femaleText;
  } else {
    textEl.textContent = item.maleText;
  }

  document.getElementById('dare-instruction').innerHTML = `🎙️ <strong>${item.desc}</strong>`;

  resetTimer();
  document.getElementById('result-modal').classList.remove('hidden');
}

// ==========================================================================
// 7. SORU (DOĞRULUK) MODALI
// ==========================================================================
function triggerQuestionModal(db, playedSet, categoryTitle, badgeClass) {
  audio.playHeartbeat();

  if (playedSet.size >= db.length) {
    playedSet.clear();
  }
  const available = db.filter(item => !playedSet.has(item.id));
  const selectedItem = available[Math.floor(Math.random() * available.length)];
  playedSet.add(selectedItem.id);

  currentActiveItem = selectedItem;
  currentItemType = 'question';
  currentItemCategory = categoryTitle;

  const badgeEl = document.getElementById('result-level-badge');
  badgeEl.className = 'result-level-badge ' + badgeClass;
  badgeEl.textContent = categoryTitle;

  const activeP = PLAYERS[activePlayerIndex];
  document.getElementById('active-speaker-avatar').textContent = activeP.avatar;
  document.getElementById('active-speaker-text').textContent = `${activeP.name} İçin İtiraf Sorusu:`;

  document.getElementById('result-text').textContent = selectedItem.text;
  document.getElementById('dare-instruction').innerHTML = `💬 <strong>GÖREV:</strong> Mikrofona sesli şekilde partnerine en dürüst cevabını ver!`;

  resetTimer();
  document.getElementById('result-modal').classList.remove('hidden');
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ==========================================================================
// 8. GERİ SAYIM SAYACI
// ==========================================================================
let timerSeconds = 30;
let timerInterval = null;
let isTimerRunning = false;

function startTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;
  document.getElementById('timer-toggle-btn').textContent = 'Durdur';

  timerInterval = setInterval(() => {
    timerSeconds--;
    document.getElementById('timer-seconds').textContent = timerSeconds < 10 ? '0' + timerSeconds : timerSeconds;

    if (timerSeconds <= 10) {
      audio.playHeartbeat();
    }

    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      isTimerRunning = false;
      document.getElementById('timer-toggle-btn').textContent = 'Süre Doldu!';
      audio.playDrinkPenalty();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  document.getElementById('timer-toggle-btn').textContent = 'Devam Et';
}

function resetTimer() {
  pauseTimer();
  timerSeconds = 30;
  document.getElementById('timer-seconds').textContent = '30';
  document.getElementById('timer-toggle-btn').textContent = 'Başlat';
}

// ==========================================================================
// 9. EYLEMLER: SÖYLEDİ (+10 PUAN) VEYA PAS GEÇ (+1 CEZA / PARTNER KOMUT)
// ==========================================================================
function handleActionSuccess() {
  audio.playSuccess();
  triggerConfetti();

  const activeP = PLAYERS[activePlayerIndex];
  activeP.score += 10;
  completedCount++;

  // Eğer cesaret ise bu seviyede oynandı olarak kaydet
  if (currentItemType === 'dare') {
    if (typeof currentActiveDareIndex === 'number' && currentActiveDareIndex >= 0) {
      if (!playedDareIndexesByLevel[currentHeatLevel]) {
        playedDareIndexesByLevel[currentHeatLevel] = new Set();
      }
      playedDareIndexesByLevel[currentHeatLevel].add(currentActiveDareIndex);
    }

    // 1'ler bittikten sonra 2'ye geçiş kontrolü
    const totalInCurrentLvl = DARE_LEVELS[currentHeatLevel - 1].length;
    if (playedDareIndexesByLevel[currentHeatLevel].size >= totalInCurrentLvl && currentHeatLevel < 5) {
      const prevLvl = currentHeatLevel;
      currentHeatLevel++;
      showLevelToast(`🎉 TEBRİKLER! LEVEL ${prevLvl} BİTTİ, LEVEL ${currentHeatLevel}'E GEÇİLDİ! 🔥`);
    }
  }

  logHistoryItem(activeP, currentActiveItem, currentItemType, 'success');
  updateUI();
  closeResultModal();
  switchTurn();
}


// ==========================================================================
// 10. KIŞKIRTICI SANAL CEZALAR VERİTABANI (20 YENİ HOT CEZA)
// ==========================================================================
const PENALTIES_DB = [
  {
    icon: "🎙️",
    title: "ETKİLEYİCİ SES TONU",
    desc: "Mikrofona iyice yaklaş; tek kelime bile konuşmadan sadece tüyleri ürpertecek en derin, kışkırtıcı ve baştan çıkarıcı ses tonunu/nefesini çıkar!"
  },
  {
    icon: "🔥",
    title: "ŞİFRELİ ARZU İTİRAFI",
    desc: "'Yükseldim' veya 'tahrik oldum' kelimelerini asla kullanmadan, şu an beni ne kadar arzuladığını tek bir kışkırtıcı cümleyle hissettirerek tarif et!"
  },
  {
    icon: "🍸",
    title: "LOŞ BAR FISILTISI",
    desc: "Loş bir barda yan yana oturmuşuz gibi mikrofona yaklaş; etraftakilerin duymayacağı ama kulağımı yakacak o en cüretkâr dirty talk fısıltını yap!"
  },
  {
    icon: "💋",
    title: "TENİNE DOKUNUŞ TARİFİ",
    desc: "Şu an ellerimin ve dudaklarımın vücudunda tam olarak nereye değmesini istediğini, en şehvetli ve kışkırtıcı kelimelerle adım adım anlat!"
  },
  {
    icon: "😈",
    title: "KİRLİ EMİR / KOMUT",
    desc: "Partnerinin gözlerinin içine bak; bu gece sana tamamen itaat etmesini sağlayacak o baskın ve arsız emri tek bir cümleyle ver!"
  },
  {
    icon: "🍷",
    title: "KADEHTEN DUDAKLARA",
    desc: "İçeceğinden yavaşça bir yudum alıp dudaklarını ıslat ve mikrofona boğuk bir sesle: 'Tadın bundan çok daha bağımlılık yapıcı...' fısılda!"
  },
  {
    icon: "🫦",
    title: "SICAK NEFES CEZASI",
    desc: "Mikrofonu ağzına yaklaştır; 10 saniye boyunca tam boynumdaymışsın gibi sadece kesik, sıcak ve derin nefesler ver!"
  },
  {
    icon: "🗝️",
    title: "YASAK FANTEZİ İTİRAFI",
    desc: "Bu gece benimle yalnız kaldığında aklından geçen en utanılacak veya en vahşi fantezini hiç sansürlemeden fısılda!"
  },
  {
    icon: "🧊",
    title: "ERİYEN BUZ FANTEZİSİ",
    desc: "Bir parça buzu dudaklarında gezdir ve tenime dokundursan hangi hassas noktama kadar kaydıracağını sesli ve detaylıca tarif et!"
  },
  {
    icon: "👠",
    title: "GECE 02:00 TEKLİFİ",
    desc: "Barda gecenin son içkisini içiyoruz... Masanın altından bacağımı okşayarak beni hemen otel odana çıkarmak için söyleyeceğin o cümleyi kur!"
  },
  {
    icon: "🌶️",
    title: "KIRMIZI ÇİZGİYİ AŞ",
    desc: "Vücudumda en çok iz bırakmak, öpmek veya ısırmak istediğin bölgeyi ve bunu yaparken bana ne hissettireceğini açıkça anlat!"
  },
  {
    icon: "🎭",
    title: "İSİMLE İNLEME",
    desc: "Partnerinin adını, yatakta kontrolünü tamamen kaybettiğin o en yüksek anda çıkaracağın boğuk ve titrek ses tonuyla söyle!"
  },
  {
    icon: "🔞",
    title: "20 SANİYE DIRTY TALK",
    desc: "Mikrofona yaklaş ve 20 saniye boyunca hiç duraksamadan, bu gece beni nasıl baştan çıkarıp yoracağını en açık sözlerle dikte et!"
  },
  {
    icon: "🥂",
    title: "GÖZ HAPSİ & CÜRET",
    desc: "Gözlerini kameradan hiç ayırmadan: 'Şu an aklımdan geçenleri bilseydin, üzerimdekileri hemen parçalardın...' cümlesini en ateşli bakışınla söyle!"
  },
  {
    icon: "🖤",
    title: "İLK TEMAS TİTREMESİ",
    desc: "Sana dokunduğumda vücudunun neresinin anında titrediğini ve sana dokunulmasından en çok zevk aldığın gizli noktayı itiraf et!"
  },
  {
    icon: "🕯️",
    title: "GECE YARISI VAADİ",
    desc: "Işıkları biraz loşlaştır ve kısık bir sesle bu gece ten teneyken bana yaşatacağın en unutulmaz zevkin vaadini fısılda!"
  },
  {
    icon: "👑",
    title: "TESLİMİYET SEANSI",
    desc: "Mikrofona çok yakın ve hipnotize edici bir tonla: 'Şu an sadece benim sesime odaklan ve kontrolü tamamen bana bırak...' de!"
  },
  {
    icon: "🔥",
    title: "SICAKLIK DERECESİ",
    desc: "Şu an içindeki yükselişi 1 ile 100 arasında bir dereceyle belirt ve bu yangını bu gece söndürmenin tek yolunu fısılda!"
  },
  {
    icon: "🍒",
    title: "TAT ALMA FANTEZİSİ",
    desc: "Vücudumun hangi noktasından şampanya, çikolata veya çilek yemeyi hayal ettiğini en cüretkâr detaylarıyla anlat!"
  },
  {
    icon: "🫀",
    title: "KALP ATIŞI & İÇ ÇEKİŞ",
    desc: "Elini göğsüne koy, gözlerini kapatıp mikrofona doğru derin bir iç çekerek: 'Beni bu kadar delirtmeye hakkın yoktu...' de!"
  }
];


// PAS GEÇTİĞİNDE: Ceza verilir, kışkırtıcı ceza kartı açılır!
function handleActionPass() {
  audio.playDrinkPenalty();

  const activeP = PLAYERS[activePlayerIndex];
  activeP.drinks += 1;
  completedCount++;

  // Eğer cesaret ise bu seviyede oynandı olarak kaydet
  if (currentItemType === 'dare') {
    if (typeof currentActiveDareIndex === 'number' && currentActiveDareIndex >= 0) {
      if (!playedDareIndexesByLevel[currentHeatLevel]) {
        playedDareIndexesByLevel[currentHeatLevel] = new Set();
      }
      playedDareIndexesByLevel[currentHeatLevel].add(currentActiveDareIndex);
    }

    const totalInCurrentLvl = DARE_LEVELS[currentHeatLevel - 1].length;
    if (playedDareIndexesByLevel[currentHeatLevel].size >= totalInCurrentLvl && currentHeatLevel < 5) {
      const prevLvl = currentHeatLevel;
      currentHeatLevel++;
      showLevelToast(`🎉 LEVEL ${prevLvl} BİTTİ, LEVEL ${currentHeatLevel}'E GEÇİLDİ! 🔥`);
    }
  }

  logHistoryItem(activeP, currentActiveItem, currentItemType, 'pass');
  updateUI();
  closeResultModal();

  // Rastgele bir kışkırtıcı ceza seç
  const penalty = PENALTIES_DB[Math.floor(Math.random() * PENALTIES_DB.length)];
  const iconEl = document.getElementById('penalty-card-icon');
  const nameEl = document.getElementById('penalty-card-name');
  const descEl = document.getElementById('penalty-card-desc');
  if (iconEl) iconEl.textContent = penalty.icon;
  if (nameEl) nameEl.textContent = penalty.title;
  if (descEl) descEl.textContent = penalty.desc;

  document.getElementById('pass-penalty-modal').classList.remove('hidden');
}

function closeResultModal() {
  resetTimer();
  document.getElementById('result-modal').classList.add('hidden');
}

function switchTurn() {
  activePlayerIndex = 1 - activePlayerIndex;
  updateUI();
}

// Level Bildirim Toast'ı
function showLevelToast(msg) {
  let toast = document.getElementById('game-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'game-toast';
    toast.className = 'game-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  audio.playSuccess();
  triggerConfetti();
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// UI Güncelleme (Puanlar, Cezalar & Sıra)
function updateUI() {
  document.getElementById('p1-score').textContent = PLAYERS[0].score;
  document.getElementById('p1-drinks').textContent = PLAYERS[0].drinks;
  document.getElementById('p2-score').textContent = PLAYERS[1].score;
  document.getElementById('p2-drinks').textContent = PLAYERS[1].drinks;

  const p1Card = document.getElementById('p1-card');
  const p2Card = document.getElementById('p2-card');
  const p1Ind = document.getElementById('p1-indicator');
  const p2Ind = document.getElementById('p2-indicator');

  if (activePlayerIndex === 0) {
    p1Card.classList.add('active-turn');
    p2Card.classList.remove('active-turn');
    p1Ind.classList.remove('hidden');
    p2Ind.classList.add('hidden');
  } else {
    p2Card.classList.add('active-turn');
    p1Card.classList.remove('active-turn');
    p2Ind.classList.remove('hidden');
    p1Ind.classList.add('hidden');
  }

  // Level Gösterge Çubuğu (1 - 2 - 3 - 4 - 5)
  for (let lvl = 1; lvl <= 5; lvl++) {
    const pill = document.getElementById(`lvl-btn-${lvl}`);
    if (pill) {
      if (lvl === currentHeatLevel) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    }
  }

  document.getElementById('completed-count').textContent = completedCount;
  const percent = Math.min(100, Math.round((completedCount / totalCount) * 100));
  document.getElementById('progress-fill').style.width = `${percent}%`;

  saveGameState();
}

function logHistoryItem(player, item, type, result) {
  let content = "";
  if (type === 'dare') {
    content = player.gender === 'female' ? item.femaleText : item.maleText;
  } else {
    content = item.text;
  }

  const entry = {
    player: player.name,
    category: currentItemCategory,
    text: content,
    result: result === 'success' ? '✅ Yapıldı (+10 Puan)' : '🍷 Pas Geçildi (Ceza)',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  gameHistory.unshift(entry);
  renderHistory();
}

function renderHistory() {
  const listEl = document.getElementById('history-list');
  if (!listEl) return;

  if (gameHistory.length === 0) {
    listEl.innerHTML = '<div class="history-empty">Henüz soru veya cesaret tamamlanmadı. Çarkı çevirerek başla!</div>';
    return;
  }

  listEl.innerHTML = gameHistory.map(item => `
    <div class="history-item">
      <div class="history-item-top">
        <span>${item.player} • ${item.category}</span>
        <span>${item.result} • ${item.time}</span>
      </div>
      <div class="history-item-text">“${item.text}”</div>
    </div>
  `).join('');
}

function saveGameState() {
  try {
    const serializableDares = {};
    for (let lvl = 1; lvl <= 5; lvl++) {
      serializableDares[lvl] = Array.from(playedDareIndexesByLevel[lvl] || []);
    }
    const data = {
      players: PLAYERS,
      activePlayerIndex,
      completedCount,
      currentHeatLevel,
      spinsSinceLastDare,
      playedDareIndexesByLevel: serializableDares,
      history: gameHistory.slice(0, 30)
    };
    localStorage.setItem('red_wheel_2_state_v5', JSON.stringify(data));
  } catch (e) { }
}

function loadGameState() {
  try {
    const raw = localStorage.getItem('red_wheel_2_state_v5');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.players && data.players.length === 2) {
        PLAYERS[0].name = data.players[0].name || "Kadın Oyuncu";
        PLAYERS[0].score = data.players[0].score || 0;
        PLAYERS[0].drinks = data.players[0].drinks || 0;

        PLAYERS[1].name = data.players[1].name || "Erkek Oyuncu";
        PLAYERS[1].score = data.players[1].score || 0;
        PLAYERS[1].drinks = data.players[1].drinks || 0;

        document.getElementById('p1-name').textContent = PLAYERS[0].name;
        document.getElementById('p2-name').textContent = PLAYERS[1].name;
      }
      if (typeof data.activePlayerIndex === 'number') activePlayerIndex = data.activePlayerIndex;
      if (typeof data.completedCount === 'number') completedCount = data.completedCount;
      if (typeof data.currentHeatLevel === 'number' && data.currentHeatLevel >= 1 && data.currentHeatLevel <= 5) {
        currentHeatLevel = data.currentHeatLevel;
      }
      if (typeof data.spinsSinceLastDare === 'number') spinsSinceLastDare = data.spinsSinceLastDare;
      if (data.playedDareIndexesByLevel) {
        for (let lvl = 1; lvl <= 5; lvl++) {
          if (Array.isArray(data.playedDareIndexesByLevel[lvl])) {
            playedDareIndexesByLevel[lvl] = new Set(data.playedDareIndexesByLevel[lvl]);
          }
        }
      }
      if (Array.isArray(data.history)) {
        gameHistory = data.history;
        renderHistory();
      }
    }
  } catch (e) { }
}

// ==========================================================================
// 10. KONFETİ VE ARKA PLAN
// ==========================================================================
const confettiCanvas = document.getElementById('confetti-canvas');
const confCtx = confettiCanvas.getContext('2d');
let confettiParticles = [];

function triggerConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiParticles = [];

  const colors = ['#e11d48', '#ff2a6d', '#f59e0b', '#a855f7', '#3b82f6', '#ffffff'];
  for (let i = 0; i < 90; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.5) * 16 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12
    });
  }
}

function updateConfetti() {
  if (confettiParticles.length === 0) return;
  confCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.3;
    p.alpha -= p.decay;
    p.rotation += p.rotationSpeed;

    if (p.alpha <= 0) {
      confettiParticles.splice(i, 1);
      continue;
    }

    confCtx.save();
    confCtx.globalAlpha = p.alpha;
    confCtx.translate(p.x, p.y);
    confCtx.rotate((p.rotation * Math.PI) / 180);
    confCtx.fillStyle = p.color;
    confCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    confCtx.restore();
  }
}

const bgCanvas = document.getElementById('bg-canvas');
const bgCtx = bgCanvas.getContext('2d');
let bgStars = [];

function initBgStars() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
  bgStars = [];
  for (let i = 0; i < 45; i++) {
    bgStars.push({
      x: Math.random() * bgCanvas.width,
      y: Math.random() * bgCanvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.008
    });
  }
}

function drawBgStars() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  bgStars.forEach(s => {
    s.alpha += s.speed;
    if (s.alpha > 1 || s.alpha < 0.2) s.speed = -s.speed;

    bgCtx.save();
    bgCtx.beginPath();
    bgCtx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    bgCtx.fillStyle = `rgba(255, 128, 171, ${Math.abs(s.alpha)})`;
    bgCtx.shadowColor = '#ff2a6d';
    bgCtx.shadowBlur = 8;
    bgCtx.fill();
    bgCtx.restore();
  });
}

function mainLoop() {
  updateConfetti();
  drawBgStars();
  requestAnimationFrame(mainLoop);
}

// ==========================================================================
// 11. BAŞLATMA & OLAY DİNLEYİCİLERİ
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupCanvasDPI();
  initBgStars();
  loadGameState();
  updateUI();
  drawWheel();
  requestAnimationFrame(mainLoop);

  window.addEventListener('resize', () => {
    setupCanvasDPI();
    initBgStars();
    drawWheel();
  });

  document.getElementById('main-spin-btn').addEventListener('click', spinWheel);
  document.getElementById('center-spin-btn').addEventListener('click', spinWheel);

  let isDragging = false;
  let dragStartAngle = 0;
  let lastDragAngle = 0;
  let lastDragTime = 0;

  function getAngleFromEvent(e) {
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return Math.atan2(clientY - centerY, clientX - centerX);
  }

  canvas.addEventListener('mousedown', (e) => {
    if (isSpinning) return;
    isDragging = true;
    dragStartAngle = getAngleFromEvent(e);
    lastDragAngle = dragStartAngle;
    lastDragTime = performance.now();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging || isSpinning) return;
    const currentDrag = getAngleFromEvent(e);
    const delta = currentDrag - lastDragAngle;
    currentAngle += delta;
    lastDragAngle = currentDrag;
    lastDragTime = performance.now();
    checkPointerTick();
    drawWheel();
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging || isSpinning) return;
    isDragging = false;
    const currentDrag = getAngleFromEvent(e);
    const timeDiff = performance.now() - lastDragTime;
    if (timeDiff < 100) {
      const releaseVelocity = (currentDrag - dragStartAngle) / (timeDiff || 1);
      if (Math.abs(releaseVelocity) > 0.05) {
        spinWheel();
      }
    }
  });

  canvas.addEventListener('touchstart', (e) => {
    if (isSpinning) return;
    isDragging = true;
    dragStartAngle = getAngleFromEvent(e);
    lastDragAngle = dragStartAngle;
    lastDragTime = performance.now();
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || isSpinning) return;
    const currentDrag = getAngleFromEvent(e);
    const delta = currentDrag - lastDragAngle;
    currentAngle += delta;
    lastDragAngle = currentDrag;
    lastDragTime = performance.now();
    checkPointerTick();
    drawWheel();
  }, { passive: true });

  window.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      spinWheel();
    }
  });

  // 3 Gizemli Kutu Tıklamaları
  document.getElementById('box-1').addEventListener('click', () => onMysteryBoxClick(0));
  document.getElementById('box-2').addEventListener('click', () => onMysteryBoxClick(1));
  document.getElementById('box-3').addEventListener('click', () => onMysteryBoxClick(2));

  // Sayaç Butonları
  document.getElementById('timer-toggle-btn').addEventListener('click', () => {
    if (isTimerRunning) pauseTimer();
    else startTimer();
  });
  document.getElementById('timer-reset-btn').addEventListener('click', resetTimer);

  // Eylemler: SÖYLEDİ (+10 Puan) ve PAS GEÇ (+1 Ceza / Komut)
  document.getElementById('action-success-btn').addEventListener('click', handleActionSuccess);
  document.getElementById('action-pass-btn').addEventListener('click', handleActionPass);
  document.getElementById('close-modal-btn').addEventListener('click', closeResultModal);

  // Pas Cezası Modalı Kapatma
  document.getElementById('close-pass-btn').addEventListener('click', () => {
    document.getElementById('pass-penalty-modal').classList.add('hidden');
    switchTurn();
  });

  // LEVEL ÇUBUĞU (1 - 2 - 3 - 4 - 5) TIKLAMA DESTEĞİ
  for (let lvl = 1; lvl <= 5; lvl++) {
    const btn = document.getElementById(`lvl-btn-${lvl}`);
    if (btn) {
      btn.addEventListener('click', () => {
        currentHeatLevel = lvl;
        updateUI();
        audio.playTick(450 + lvl * 70);
        showLevelToast(`🔥 LEVEL ${lvl} SEÇİLDİ! (${LEVEL_TITLES[lvl - 1]})`);
      });
    }
  }

  document.getElementById('switch-turn-btn').addEventListener('click', switchTurn);

  const p1NameEl = document.getElementById('p1-name');
  const p2NameEl = document.getElementById('p2-name');

  p1NameEl.addEventListener('blur', () => {
    PLAYERS[0].name = p1NameEl.textContent.trim() || "Kadın Oyuncu";
    saveGameState();
  });
  p2NameEl.addEventListener('blur', () => {
    PLAYERS[1].name = p2NameEl.textContent.trim() || "Erkek Oyuncu";
    saveGameState();
  });

  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  soundBtn.addEventListener('click', () => {
    audio.enabled = !audio.enabled;
    soundIcon.textContent = audio.enabled ? '🔊' : '🔇';
    soundBtn.title = audio.enabled ? 'Sesi Kapat' : 'Sesi Aç';
  });

  document.getElementById('fullscreen-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => { });
    } else {
      document.exitFullscreen().catch(() => { });
    }
  });

  document.getElementById('history-btn').addEventListener('click', () => {
    renderHistory();
    document.getElementById('history-modal').classList.remove('hidden');
  });
  document.getElementById('close-history-btn').addEventListener('click', () => {
    document.getElementById('history-modal').classList.add('hidden');
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('Tüm puanlar, cezalar ve oyun ilerlemesi sıfırlansın mı?')) {
      PLAYERS[0].score = 0;
      PLAYERS[0].drinks = 0;
      PLAYERS[1].score = 0;
      PLAYERS[1].drinks = 0;
      activePlayerIndex = 0;
      completedCount = 0;
      currentHeatLevel = 1;
      spinsSinceLastDare = 0;
      playedFlirtIds.clear();
      playedHotIds.clear();
      playedTabooIds.clear();
      gameHistory = [];
      playedDareIndexesByLevel = { 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(), 5: new Set() };
      currentActiveDareIndex = null;
      localStorage.removeItem('red_wheel_2_state_v5');
      renderHistory();
      updateUI();
    }
  });
});
