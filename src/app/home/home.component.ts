import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [NgxTypedWriterModule, CommonModule, TranslateModule],
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent implements OnInit {
  hasScrolled = false;
  translatedPhrases: string[] = [];
  phrasesLoaded = false;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('home.phrases').subscribe((phrases: string[]) => {
      this.translatedPhrases = phrases;
      this.phrasesLoaded = true;
    });
  }

  home = {
    imgPfp: '/assets/pfp.jpg',
    imgPfpAlt: 'Profile Picture Hero',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 0;
  }

  showToast() {
    const toast = document.createElement('div');
    toast.className = 'toast notification is-success title is-5 has-text-black';
    toast.style.position = 'fixed';
    toast.style.top = '10%';
    toast.style.left = '50%';
    toast.style.transform = 'translate(-50%, -50%)';
    toast.style.zIndex = '1000';
    toast.style.padding = '10px';
    toast.style.border = '2px solid #6effbe';
    this.translate.get('thanktoast').subscribe((translation: string) => {
      toast.innerText = translation;
    });

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}
