// src/app/shared/services/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type ContactType = 'inquiry' | 'consultation' | 'feedback';

export interface ContactPayload {
  type: ContactType;
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  preferredContact?: 'email' | 'phone' | 'whatsapp';
  urgent?: boolean;
  consent: boolean;
  // لو لاحقًا حبيت ملفات: استخدم FormData بدل JSON
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  // عدّلها حسب API عندك
  private readonly endpoint = 'https://championstepsback-production.up.railway.app/api/contact';

  constructor(private http: HttpClient) {}

  submit(payload: ContactPayload): Observable<{ id?: string; message?: string }> {
    return this.http.post<{ id?: string; message?: string }>(this.endpoint, payload);
  }
}
