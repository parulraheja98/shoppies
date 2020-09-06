import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Movie } from '../shared/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class NominationService {
  static MAX_NOMINATIONS_LENGTH = 5;

  constructor(private db: AngularFirestore) {}

  /**
   * Create a new nomination with an unique imdbId document.
   */
  async createNomination(nomination: Movie): Promise<void> {
    return await this.db
      .collection('nominations')
      .doc(nomination.imdbID)
      .set(nomination);
  }

  /**
   * Get all existing nominations.
   */
  async getNominations(): Promise<DocumentData[]> {
    debugger;
    return new Promise((resolve, reject) => {
      this.db.firestore
        .collection('nominations')
        .get()
        .then((snapshot) => {
          const nominations = snapshot.docs.map((doc) => doc.data());
          resolve(nominations);
        })
        .catch((err) => reject(err));
    });
  }

  /*
   * Delete nomination by a given id.
   */
  async deleteNomination(id: string): Promise<void> {
    return await this.db.collection('nominations').doc(id).delete();
  }
}
