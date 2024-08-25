const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

    const messages = [
		"Bugün harika bir gün olacak!",
		"Her zorluk, yeni bir fırsat getirir.",
		"Kendine inanmak, başarının ilk adımıdır.",
		"Bugün bir kişiye gülümsemeyi unutma.",
		"Küçük adımlar, büyük yolculukların başlangıcıdır.",
		"Hayallerinin peşinden koşmaktan asla vazgeçme.",
		"Her yeni gün, yeni bir başlangıçtır.",
		"Başarı, düştükten sonra tekrar ayağa kalkmaktır.",
		"Pozitif düşünce, pozitif sonuçlar getirir.",
		"Kendini geliştirmek için her gün bir şeyler öğren.",
		"Hayat, onu yaşamaya cesaret edenlerindir.",
		"Mutluluğun anahtarı, sahip olduklarına şükretmektir.",
		"Güçlükler, seni daha güçlü yapar.",
		"Bugün, yarının dünüdür.",
		"Başarı yolculuğunda en büyük engellerden biri korkudur.",
		"Her şeyin bir sebebi vardır, sabırlı ol.",
		"Hayatta en değerli şey, zamanındır.",
		"İyi niyetle atılan her adım, doğru yolda olduğunu gösterir.",
		"Başkalarına yardım ederek kendi mutluluğunu bulabilirsin.",
		"Hayallerine ulaşmak için çok çalış, ama yolun tadını çıkarmayı unutma.",
		"Başarı bir yolculuktur, varış noktası değil.",
		"Her gün kendine 'neden olmasın?' diye sor.",
		"Zorluklar, karakterini güçlendirir.",
		"Hayat kısa, anı yaşa.",
		"Başarı, hazırlık ve fırsat buluştuğunda gelir.",
		"Kendine inan, gerisi gelecektir.",
		"Bugün yaptığın seçimler, yarınını belirler.",
		"Hayatta en büyük zafer, korkularını yenmektir.",
		"Her şey zihinde başlar.",
		"Yapabileceğini düşün, yapamazsın diye düşünme.",
		"Başarı, pes etmemektir.",
		"Değişim, içinde başlar.",
		"Her gün yeni bir şans.",
		"Başkalarının hayatına dokunarak kendi hayatını zenginleştir.",
		"Hedeflerine ulaşmak için her gün bir adım at.",
		"Mutluluk bir tercihtir.",
		"En karanlık gece bile sonunda sabaha ulaşır.",
		"Hayallerinin büyüklüğü, başarının ölçüsüdür.",
		"Kendini keşfetmek, en büyük maceradır.",
		"Bugün, yarını değiştirmek için bir fırsattır.",
		"İyimserlik, başarının temelidir.",
		"Hayat, ona verdiğin anlamdan ibarettir.",
		"Büyük başarılar, küçük çabalarla başlar.",
		"Kendine güven, başkalarının da sana güvenmesini sağlar.",
		"Her yeni gün, yeni bir mucizedir.",
		"Başarı, hazırlık ve fırsatın buluşma noktasıdır.",
		"Zorluklar, seni hedeflerine daha da yaklaştırır.",
		"Hayatın güzelliklerini fark etmeyi unutma.",
		"Başarı, düşmekten korkmamaktır.",
		"Her an, yeni bir başlangıç yapma şansıdır.",
		"Kendini sevmek, başkalarını sevmenin temelidir.",
		"Hayat, onu yaşamaya cesaret edenlere güzeldir.",
		"Bugün yaptığın fedakarlıklar, yarının başarılarıdır.",
		"En büyük zafer, kendini yenmektir.",
		"Hayaller, hedeflerin tohumlarıdır.",
		"Her zorluğun ardında bir fırsat gizlidir.",
		"Başarı, kararlılığın sonucudur.",
		"Kendine inanmak, başarının yarısıdır.",
		"Hayat, onu nasıl yaşadığınla ilgilidir.",
		
];

// Kök URL için yanıt
app.get('/', (req, res) => {
    res.send('Günlük Mesaj API\'sine Hoş Geldiniz! Mesaj almak için /message endpoint\'ini kullanın.');
});

app.get('/message', (req, res) => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    res.json({ message: randomMessage });
});

// 404 hata yönetimi
app.use((req, res, next) => {
    res.status(404).send("Üzgünüm, bu sayfa bulunamadı!");
});

// Genel hata yönetimi
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Bir şeyler ters gitti!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});