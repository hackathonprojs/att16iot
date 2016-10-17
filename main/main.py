import pygame
import pygame.camera
from pygame.locals import *
import pygame.image
import time

pygame.init()
pygame.camera.init()
camlist = pygame.camera.list_cameras()
cam = pygame.camera.Camera(camlist[0])
cam.start()


while True:
    timestr = time.strftime("p%Y%m%d-%H%M%S")
    print "taking picture at {}".format(timestr)
    img = cam.get_image()
    pygame.image.save(img, "./public/camera/" + timestr + ".jpg")
    print "picture taken"
    time.sleep(30)  # Delay for 1 minute (60 seconds)


pygame.camera.quit()
