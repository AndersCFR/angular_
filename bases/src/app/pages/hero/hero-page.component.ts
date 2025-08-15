import { UpperCasePipe } from "@angular/common";
import { Component, signal, computed } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
    styles: `
    button {
        padding: 5px;
        margin: 5px 10px;
        width: 75px;
    }
    `
})

export class HeroPageComponent {
    name  = signal('Ironman')
    age = signal(45)

    // Computed properties, only recalculated when dependencies change
    // Useful for performance optimization, only read properties i cant use set or update
    heroDescription = computed(() => {
        const description = `${this.name()} is ${this.age()} years old.`;
    })

    capitalizedName = computed(() => {
        return this.name().toUpperCase();
    })

    getHeroDescription(): string {
        return `${this.name()} is ${this.age()} years old.`;
    }

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }
    
    changeAge(): void {
        this.age.set(60);
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(45);
    }

}