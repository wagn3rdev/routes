import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => console.log(res));
    this.activatedRoute.queryParamMap.subscribe((res) => console.log(res));

    setInterval(() => {
      // this.router.navigate(['404']);
      this.router.navigateByUrl('404');
    }, 3000);
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
}
