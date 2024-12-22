// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "فروشگاه اینترنتی آژمان دیزاین AzhmanDesigne.ir", "ارسال رایگان برای سفارش بالای 10 میلیون تومان   Designe فروشگاه چوب آژمان  NEW INSPIRATION 2021  25% OFF ON NEW SEASON  محصولات جدید 2023  25 درصد تخفیف اولین خرید  NEW INSPIRATION 2021  25% OFF ON NEW SEASON  اتاق کودک  همه  نهارخوری  کنسول  دراور  میزتلویزیون  آینه  تخت خواب  #28, 3nd floor, WYSIWYG PlazaWeb City, Builder, WB 1969 Phone  100 121 34567 Fax  100 121 34568 Email  info@wysiwygmail.com  تخت خواب  اتاق کودک  اتاق کودک  کنسول   ", "");
   return this;
}
