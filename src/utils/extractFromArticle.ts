import { Article } from "interfaces";
import { DateTime } from "luxon";

export const extractFromArticle = (article: Article) => {

  const date = DateTime.fromISO(article.publishedAt as string, { locale: 'fr' });
  const publishedAt = date.toFormat('ccc dd MMMM');

  return {
    image : article.main_img.data.attributes,
    categories : article.categories.data.map(fetchedCategory => fetchedCategory.attributes),
    publishedAt,
    timer : article.timer
  }
}