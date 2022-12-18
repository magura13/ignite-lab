import { Notification } from '../../src/application/entities/notification';
import { NotificationRepository } from '../../src/application/repositories/notification-repositories';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    console.log(notification);
    this.notifications.push(notification);
  }
}
