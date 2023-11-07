import { WindowService } from './window.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // This will make the service available application-wide
})
export class AuthService {
  private users: { email: string, password: string }[] = []; // Store user data
  private currentUserData = new BehaviorSubject<{ email: string, isAuthenticated: boolean }>({
    email: '',
    isAuthenticated: false,
  });

  constructor(private WindowService: WindowService) {
    // You can initialize the user data from a storage or API call if needed
    this.loadUserFromStorage();
  }

  get currentUser() {
    return this.currentUserData.asObservable();
  }

  // Simulate a signup method
  signUp(email: string, password: string): boolean {
    // Check if the user already exists
    const userExists = this.users.some(user => user.email === email);
    if (userExists) {
      this.WindowService.Alert("User already exist.!");
      return false; // User already exists
    }

    // Add the new user
    this.users.push({ email, password });
    this.WindowService.Alert("New user added.!");

    // Save user data to storage (e.g., localStorage)
    this.saveUserToStorage();

    return true;
  }

  // Simulate a login method
  logIn(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      // User authentication succeeded
      this.WindowService.Alert("Login Successful.!")
      //this.currentUserData.next({ email, isAuthenticated: true });
      return true;
    }

    this.WindowService.Alert("Login failed due to incorrect username and password");
    return false; // Authentication failed
  }

  // Simulate a logout method
  logOut() {
    // Clear the current user data and mark as not authenticated
    this.currentUserData.next({ email: '', isAuthenticated: false });
  }

  private loadUserFromStorage() {
    // You can implement loading user data from storage (e.g., localStorage) here.
    // Example: const userData = localStorage.getItem('userData');
    // If user data is found, update this.users and currentUserData.
  }

  private saveUserToStorage() {
    // You can implement saving user data to storage (e.g., localStorage) here.
    // Example: localStorage.setItem('userData', JSON.stringify(this.users));
  }
}
