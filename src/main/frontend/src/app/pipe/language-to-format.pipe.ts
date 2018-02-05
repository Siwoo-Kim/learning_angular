import { Pipe, PipeTransform } from '@angular/core';
import { Language } from "../component/first-step-chapter-3/first-step-chapter3/services/i18n-support.service";

@Pipe({
  name: 'languageToFormat'
})
export class LanguageToFormatPipe implements PipeTransform {

  transform(language:Language): string {
      if(!language) { return; }

    return `${language.name} (${language.code})`;
  }

}
